import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const EditProfileModal = ({isOpen,onClose,handleProfileImageChange,removeProfilePhoto}) => {
  return (
    <div>
      <Modal
       isOpen={isOpen}
       onClose={onClose}
       isCentered
      >
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader textAlign={'center'}>Change Profile Photo</ModalHeader>
            <ModalBody>
                <div className="flex flex-col items-center">
                    <label
                     htmlFor='changePhoto'
                     className='pb-2'
                    >
                        upload photo
                    </label>
                    <input onChange={handleProfileImageChange} type="file" id='changePhoto'/>
                </div>
                <hr />
                <p 
                onClick={()=>removeProfilePhoto()}
                className="text-red-600 font-bold py-3 text-center cursor-pointer">remove photo</p>
                <hr />
                <p
                onClick={()=>onClose()}
                className="py-3 font-bold text-blue-500 text-center cursor-pointer">cancel</p>
            </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default EditProfileModal
