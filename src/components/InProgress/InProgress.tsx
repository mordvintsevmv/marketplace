import {FC} from "react";
import {Warning} from "@mui/icons-material";
import "./InProgress.scss"

interface InProgressProps {
    title: string;
    description: string;
}

const InProgress: FC<InProgressProps> = ({title, description}) => {
    return (
        <div className={"in-progress"}>

            <div className={"in-progress__top"}>
                <div className={"in-progress__warn"}>
                    <Warning/>
                </div>

                <div className={"in-progress__title"}>
                    <h4>{title}</h4>
                </div>
            </div>

            <div className={"in-progress__description"}>
                {description}
            </div>
        </div>
    )
}

export default InProgress