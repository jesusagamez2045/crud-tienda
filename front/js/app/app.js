new Vue({
    el: '#app',
    data () {
      return {
        items: [],
        accion: null,
        modalTitle: null,
        buttonText: null,
        formData: {
            estado : "",
            nombre : null,
            codigo : null,
            precio : null,
            fecha_vencimiento : null,
            cantidad : null
        },
      }
    },
    async created () {
        await this.getAll();
    },
    methods: {
        async getAll(){
            try {
                let response = await axios.get('../products');
                console.log("la respuesta", response.data.data);
                this.items = response.data.data;
            } catch (error) {
                console.log(error);
                Swal.fire(
                    'Error!',
                    'Ocurrio un error al cargar los productos.',
                    'error'
                );
            }
        },
        showModal(accion, item = null){
            console.log(item);
            this.formData = {
                estado : "",
                nombre : null,
                codigo : null,
                precio : null,
                fecha_vencimiento : null,
                cantidad : null
            };
            if(accion == 'I'){
                this.accion = 'I';
                this.modalTitle = 'Ingresar item';
                this.buttonText = 'Ingresar';
            }else{
                this.accion = 'A';
                this.modalTitle = 'Actualizar item';
                this.buttonText = 'Actualizar';
                this.formData.nombre = item.Nombre;
                this.formData.id = item.ProductoId;
                this.formData.codigo = item.Codigo;
                this.formData.precio = item.precio;
                this.formData.fecha_vencimiento = moment(item.fecha_vencimiento).format('DD/MM/YYYY');
                this.formData.estado = item.Estado;
                this.formData.cantidad = item.cantidad;
            }
        },
        async deleteElement(item){
            Swal.fire({
                title: '¿Estas seguro?',
                text: `deseas eliminar este producto : ${item.Nombre}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Continuar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.value) {
                    try {
                        let response = await axios({
                            url: `../products`,
                            method: "DELETE",
                            data : {
                                "id" : item.ProductoId
                            }
                        });
                        if(parseInt(response.status) == 200){
                            this.getAll();
                            Swal.fire(
                                'Correcto!',
                                `Producto eliminado con exito`,
                                'success'
                            );              
                        }else{
                            Swal.fire(
                                'Error!',
                                `error eliminando el producto`,
                                'error'
                            );   
                        }
                    } catch (error) {
                        Swal.fire(
                            'Error!',
                            'Ocurrio un error inesperado.',
                            'error'
                        );
                    }
                }
            })
        },
        async insertUpdate(){
            let formdata = new FormData();
            formdata.append("nombre", this.formData.nombre);
            formdata.append("codigo", this.formData.codigo);
            formdata.append("precio", this.formData.precio);
            formdata.append("fecha_vencimiento", this.formData.fecha_vencimiento);
            formdata.append("estado", this.formData.estado);
            formdata.append("cantidad", this.formData.cantidad);

            let accion = this.accion;

            if(accion == 'A'){
                formdata.append("id", this.formData.id);
            }

            try {
                let response = await axios({
                    url: '../products',
                    method: "POST",
                    data: formdata,
                });
                if(parseInt(response.status) == 200){
                    this.getAll();
                    $("#modalProducto").modal("hide");
                    Swal.fire(
                        'Correcto!',
                        `Producto ${accion == 'I' ? 'agregado' : 'actualizado'} con exito`,
                        'success'
                    );              
                }else{
                    Swal.fire(
                        'Error!',
                        `error ${accion == 'I' ? 'agregando' : 'actualizando'} el producto`,
                        'error'
                    );   
                }
            } catch (error) {
                Swal.fire(
                    'Error!',
                    'Ocurrio un error inesperado.',
                    'error'
                );
            }
        },
    }
})
