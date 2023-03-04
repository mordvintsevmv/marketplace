import {FC} from "react";
import {Warning} from "@mui/icons-material";
import "./WarningBanner.scss"

interface InProgressProps {
    title: string;
    description: string;
}

const WarningBanner: FC<InProgressProps> = ({title, description}) => {
    return (
        <div className={"warning-banner"}>

            <div className={"warning-banner__top"}>
                <div className={"warning-banner__warn"}>
                    <Warning/>
                </div>

                <div className={"warning-banner__title"}>
                    <h4>{title}</h4>
                </div>

            </div>

            <div className={"warning-banner__description"}>
                {description}
            </div>
        </div>
    )
}

export default WarningBanner