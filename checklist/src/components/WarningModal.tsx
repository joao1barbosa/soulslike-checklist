import { 
    Button, Modal, ModalBody, ModalContent,
    ModalFooter, ModalHeader, ModalOverlay 
} from "@chakra-ui/react";

interface Pros{
    isOpen: boolean;
    onClose: () => void;
}

export function WarningModal({isOpen, onClose}: Pros){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent 
                border='1px solid #9c9c9c' 
                color='#ffffff'
                bg='#414C58'
            > 
                <ModalHeader fontStyle='bold'>Warning</ModalHeader>
                <ModalBody>
                    Changes will not be saved because you are not logged in.
                </ModalBody>
                <ModalFooter>
                    <Button 
                        bg="#81878E" 
                        onClick={onClose} 
                        color='#ffffff'
                        variant='ghost'
                        colorScheme="blue"
                        _focus={{ boxShadow: 'none' }}
                    >
                        OK
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}