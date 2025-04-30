import { ClassNameProps } from "../../type"
import * as SelectPrimitive from "@radix-ui/react-select"

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    ClassNameProps {}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    ClassNameProps {
  position?: "popper" | "item-aligned"
}

export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>, ClassNameProps {}
