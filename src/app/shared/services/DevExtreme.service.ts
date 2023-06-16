import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { saveAs } from 'file-saver';
import * as ExcelJS from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';

import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { take, tap, map, repeat } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FiltroCard, FiltroClasse, FiltroPassagem, VisaoPadraoClasse } from '../class/FiltroGrid';
import { getUrl } from 'src/app/services/base/BASEURL';
@Injectable({
    providedIn: 'root',
})
export class DevExtremeService {
    constructor(private http: HttpClient) {
    }
    //#region cardCelular===============================================================
    private filtros: FiltroCard[] = [];
    getUrl(url: string) {
        return getUrl() + url
    }
    getHeaders() {
        var headers: HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
        // .set('Authorization', `bearer ${JSON.parse('')?.Token}`);
        return { headers: headers };
    }
    filtrar(
        filtro: FiltroCard,
        dataGrid: DxDataGridComponent,
        filtro2?: FiltroCard
    ) {
        this.addFiltro(filtro, filtro2);
        if (this.filtros.length != 0) {
            dataGrid.instance.filter(this.getExpr());
        } else {
            dataGrid.instance.clearFilter();
        }
    }
    private getExpr() {
        var expr: any = [];
        this.filtros.forEach((element, index) => {
            expr.push([element.Campo, element.sinal, element.Valor]);
            if (this.filtros.length != index + 1) expr.push('and');
        });
        return expr;
    }
    private addFiltro(filtro: FiltroCard, filtro2?: FiltroCard) {
        var campo = this.filtros.find((x) => x.Campo == filtro.Campo);
        if (campo == null) {
            this.filtros.push(filtro);
            if (filtro2 != null) this.filtros.push(filtro2);
        } else {
            var index = this.filtros.indexOf(campo);
            this.filtros.splice(index, 1);
            var index2 = this.filtros.lastIndexOf(campo);
            if (index2 != null) this.filtros.splice(index2, 1);

            if (filtro.Valor != '') this.filtros.push(filtro);
        }
    }
    limparFiltro() {
        this.filtros = [];
    }
    //#endregion

    //#region metodos Grid ============================================================
    onExporting(e: any, dataGrid: DxDataGridComponent) {
        // if (dataGrid.instance.totalCount() > 9999) {
        //   e.cancel = true;
        //   Alert.AlertaAviso(
        //     'Existem muitos registro para exportar para Excel. Realize um filtro e tente novamente.'
        //   );
        // }
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Employees');

        exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            autoFilterEnabled: true,
        }).then(function () {
            // https://github.com/exceljs/exceljs#writing-xlsx
            workbook.xlsx.writeBuffer().then(function (buffer) {
                saveAs(
                    new Blob([buffer], { type: 'application/octet-stream' }),
                    'DataGrid.xlsx'
                );
            });
        });
        e.cancel = true;
    }
    onEditorPreparing(e: any, elem: ElementRef) {
        if (e.parentType == 'filterRow') {
            e.editorOptions.onKeyDown = (arg: any) => {
                if (arg.event.keyCode == 13) {
                    this.aplicarfiltro(elem);
                }
            };
        }
    }
    filtrarPelaGrid(elem: ElementRef) {
        let elements = elem.nativeElement.querySelectorAll('.dx-apply-button');
        elements[0].click();
    }
    maisinfo(elem: ElementRef) {
        let elements = elem.nativeElement.querySelectorAll(
            '.dx-datagrid-column-chooser-button'
        );
        elements[0].click();
    }
    exportarparaexcel(elem: ElementRef) {
        let elements = elem.nativeElement.querySelectorAll(
            '.dx-datagrid-export-button'
        );
        elements[0].click();
    }
    LimparFiltro(dataGrid: DxDataGridComponent) {
        dataGrid.instance.clearFilter();
    }
    aplicarfiltro(elem: ElementRef) {
        let elements = elem.nativeElement.querySelectorAll('.dx-apply-button');
        elements[0].click();
    }
    //#endregion

    //#region Filtro/Visao =====================================================
    obterFiltros(rotina: string) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            rotina: rotina,
        });
        let options = { headers };
        return this.http.get(this.getUrl('filtros/ObterFiltros'), options).pipe(
            // tap(x => FG.DesativarSpinner() ),
            take(1)
        );
    }

    incluirFiltro(ofiltro: FiltroClasse) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            tipoInclusao: 'INCLUIR',
        });
        let options = { headers };
        return this.http
            .post(this.getUrl('filtros/SalvarFiltro'), ofiltro, options)
            .pipe(
                // tap((data) => console.log('informação: ' + JSON.stringify(data))),
                take(1)
            );
    }

    atualizarFiltro(ofiltro: FiltroClasse) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            tipoInclusao: 'ALTERAR',
        });

        let options = { headers };
        return this.http
            .post(this.getUrl('filtros/SalvarFiltro'), ofiltro, options)
            .pipe(
                // tap((data) => console.log('informação: ' + JSON.stringify(data))),
                take(1)
            );
    }

    excluirFiltro(ofiltro: FiltroClasse) {
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            tipoInclusao: 'EXCLUIR',
        });
        let options = { headers };
        return this.http
            .post(this.getUrl('filtros/SalvarFiltro'), ofiltro, options)
            .pipe(
                // tap((data) => console.log('informação: ' + JSON.stringify(data))),
                take(1)
            );
    }

    Visao(request: VisaoPadraoClasse): Promise<string> {
        return this.http
            .post<string>(this.getUrl('Filtros/Visao'), request, this.getHeaders())
            .pipe(map((x) => JSON.parse(x as any)))
            .toPromise();
    }

    RetornarVisaoPadrao(grid: DxDataGridComponent) {
        grid.instance.state(null);
    }
    salvarVisao(request: VisaoPadraoClasse) {
        return this.http.post(
            this.getUrl('Filtros/SalvarVisao'),
            request,
            this.getHeaders()
        );
    }
    //#endregion

    //#region  Passagem===========================================================
    FiltroModal: BehaviorSubject<FiltroPassagem> =
        new BehaviorSubject<FiltroPassagem>(
            new FiltroPassagem({ Filtro: new FiltroClasse() })
        );
    abrirFiltroModal(filtro: FiltroPassagem) {
        this.FiltroModal.next(filtro);
    }
    Filtro: EventEmitter<any> = new EventEmitter<any>();
    //#endregion
}


