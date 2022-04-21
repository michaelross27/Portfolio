import { makeStyles } from "@material-ui/styles";
export const useRegisterPasswordStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(6, 2),
    },

    emailLogo: {
        marginBottom: theme.spacing(3),
    },
    content: { textAlign: "center" },
    actions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
