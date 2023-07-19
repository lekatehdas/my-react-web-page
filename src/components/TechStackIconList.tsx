import {Techs} from "../Techs.ts";
import {IconType} from "react-icons";
import {
    SiAnaconda, SiAndroidstudio,
    SiAngular, SiApachehadoop, SiApachespark,
    SiCss3, SiDjango,
    SiExpress, SiFirebase, SiGit,
    SiHtml5,
    SiJavascript, SiKotlin, SiMongodb, SiMysql, SiNodedotjs,
    SiPython, SiReact,
    SiTypescript
} from 'react-icons/si'
import {BiLogoJava} from 'react-icons/bi'
import {HStack} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

interface Props {
    techs: Techs[]
}

const TechStackIconList = ({techs}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        [Techs.React]: SiReact,
        [Techs.Angular]: SiAngular,
        [Techs.JavaScript]: SiJavascript,
        [Techs.TypeScript]: SiTypescript,
        [Techs.HTML]: SiHtml5,
        [Techs.CSS]: SiCss3,
        [Techs.NodeJS]: SiNodedotjs,
        [Techs.ExpressJS]: SiExpress,
        [Techs.Python]: SiPython,
        [Techs.Django]: SiDjango,
        [Techs.Java]: BiLogoJava,
        [Techs.Kotlin]: SiKotlin,
        [Techs.MySQL]: SiMysql,
        [Techs.MongoDB]: SiMongodb,
        [Techs.Firebase]: SiFirebase,
        [Techs.Hadoop]: SiApachehadoop,
        [Techs.Spark]: SiApachespark,
        [Techs.ML]: SiAnaconda,
        [Techs.Git]: SiGit,
        [Techs.Android]: SiAndroidstudio
    }

    return (
        <HStack marginY={1}>
            {techs.map(tech => <Icon key={tech} as={iconMap[tech]} color={'secondary'}/>)}
        </HStack>
    );
};

export default TechStackIconList;
