import { Badge } from "@chakra-ui/react";

export function OptionalBadge(){
    return(
        <Badge
            color='green'
            variant='subtle'
            opacity={0.7}
        >
            Optional
        </Badge>
    );
}