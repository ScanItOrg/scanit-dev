import * as Accordian from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import React from "react";


function Info() {
    return (
        <React.Fragment>
            <div className="space-y-4 px-6 flex flex-col items-center">
                <Button type="button" className="rounded-full pointer-events-none px-10">About Product</Button>
                <Card.Card className="bg-app-tertiary">
                    <Card.CardContent className="text-justify mx-auto">
                        This electric kettle is designed for quick, safe, and efficient boiling. With a sleek stainless steel body, it not only looks modern but is also built to last. The 1.5L capacity is perfect for tea, coffee, or instant noodles. It comes with auto shut-off, boil-dry protection, and a 360° swivel base for easy handling. Ideal for both home and office use, it brings convenience to your daily routine.
                    </Card.CardContent>
                </Card.Card>
            </div>

            <Accordian.Accordion className="w-full px-6" type="single" collapsible>
                <Accordian.AccordionItem value="before_using">
                    <Accordian.AccordionTrigger>Before Using The Kettle</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
                <Accordian.AccordionItem value="user_guide">
                    <Accordian.AccordionTrigger>User Guide</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
                <Accordian.AccordionItem value="safety">
                    <Accordian.AccordionTrigger>Safety and Precautions</Accordian.AccordionTrigger>
                    <Accordian.AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordian.AccordionContent>
                </Accordian.AccordionItem>
            </Accordian.Accordion>
        </React.Fragment>
    )
}

export default React.memo(Info)