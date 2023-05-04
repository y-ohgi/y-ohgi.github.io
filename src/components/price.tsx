import React from 'react'

import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Price = () => {
  return (
    <React.Fragment>
      <Container id='price'>
        <Typography
          paragraph
          variant='h5'
          align='center'
        >
          price
        </Typography>
        <Typography
          variant='subtitle2'
          align='center'
        >
          得意な領域としてはクラウドをメインにしておりますが、Web 系全般のキャッチアップが好きです。詳細な経歴はlinks のresume を参照ください。
        </Typography>
        <Typography
          variant='subtitle2'
          align='center'
        >
          ご依頼の際はlinks のSNS からご連絡頂けると幸いです。
        </Typography>

        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText
                primary='技術顧問・アドバイザー'
                secondary='クラウド（AWS/GCP）に関することを請け負っています。内容としては週1MTG + 8時間（プルリクのレビューやペアプロ、勉強会等）になります。'
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText
                primary='スポットでの依頼'
                secondary='同じくクラウドに関することを請け負っています。内容としては設計のレビューやブループリントの作成、勉強会等になります。'
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Price
