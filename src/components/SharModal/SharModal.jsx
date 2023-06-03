import React from 'react'
import { Modal, useMantineTheme} from '@mantine/core'
import PostShare from '../PostShare/PostShare'

const SharModal = ({ modalOpened, setModalOpened }) => {
    const theme = useMantineTheme();
    

  return (
    <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlue={3}
        size="55%"
      >
      <PostShare/>
      </Modal>
  )
}

export default SharModal
