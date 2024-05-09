import { enqueueSnackbar } from "notistack"

const snackBar = (type, message)=>{
    if(type =='success' || type =='error' || type =='warning' || type =='info' ){
        enqueueSnackbar(message, {variant: type, anchorOrigin:{ vertical: "top", horizontal: "right" }, })
        return;
    }
    enqueueSnackbar(message , {variant: 'default', anchorOrigin:{ vertical: "top", horizontal: "right" }, })
}

export default snackBar;