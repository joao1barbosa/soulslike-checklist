import { Badge, Box } from "@chakra-ui/react";

export function DlcBadge(){
    return(
        <Box>
            <Badge
                colorScheme="purple"
                variant="subtle"
                display="inline-flex"
                opacity={0.7}
            >
                DLC
            </Badge>
        </Box>
    );
}