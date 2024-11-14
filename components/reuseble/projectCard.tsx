import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectCard() {
    return (
        <Card className="w-full max-w-sm overflow-hidden rounded-none bg-black/20 ">
            <img
                src="/bg.webp?height=200&width=400"
                alt="Project screenshot"
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <div className="flex justify-between bg-transparent items-start">
                    <CardTitle className="text-2xl font-bold">Project Name</CardTitle>
                    <Badge variant="secondary">Status</Badge>
                </div>
                <CardDescription>A brief description of the project and its main features.</CardDescription>
            </CardHeader>
            <CardContent className=" bg-transparent">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                </Button>
                <Button size="sm" className=" bg-teal-500">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                </Button>
            </CardFooter>
        </Card>
    )
}