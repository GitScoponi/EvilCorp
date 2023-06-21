import * as Noty from 'noty';
import Swal from 'sweetalert2'
export abstract class SPWAlert {
  static AlertaSucesso(msg: string) {
    // new Noty({
    //   theme: 'bootstrap-v4',
    //   text: msg,
    //   type: 'success',
    //   layout: 'center',
    //   timeout: 2000,
    // }).show();
    Swal.fire({
      // title: 'Error!',
      text: msg,
      icon: 'success',
    })
  }

  static AlertaAviso(msg: string) {
    // new Noty({
    //   type: 'info',
    //   layout: 'center',
    //   theme: 'bootstrap-v4',
    //   timeout: 2500,
    //   text: msg,
    // }).show();
    Swal.fire({
      // title: 'Error!',
      text: msg,
      icon: 'warning',
    })
  }

  static AlertaErro(msg: string) {
    // new Noty({
    //   type: 'error',
    //   layout: 'center',
    //   theme: 'bootstrap-v4',
    //   killer: true,
    //   buttons: [
    //     Noty.button('Ok', 'btn btn-danger btn-sm btn-rounded', (n: any) => {
    //       n.close();
    //     }),
    //   ],
    //   timeout: false,
    //   text: msg,
    // }).show();
    Swal.fire({
      // title: 'Error!',
      text: msg,
      icon: 'error',
    })
  }
  static AlertaConfirmacao(msg: string, func: Function) {
    var n = new Noty({
      type: 'success',
      text: msg,
      layout: 'center',
      theme: 'bootstrap-v4',
      buttons: [
        Noty.button('SIM', 'btn btn-success', func, { id: 'button1', 'data-status': 'ok' }),

        Noty.button('NAO', 'btn btn-danger', function () {
          n.close();
        })
      ]
    });
    n.show();
    return n;
  }
}
