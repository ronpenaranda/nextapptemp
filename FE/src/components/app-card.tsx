import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface contentProps {
  content: any
}

const CardApp: React.FC<contentProps> = ({ content }) => {
  return (
    <Card className="w-[280px]">
      <CardHeader>
        <CardTitle className="pb-3">{content?.name}</CardTitle>
        <CardDescription>{content?.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={content.link}>
            <Button className="w-full">
              See More
            </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
export default CardApp