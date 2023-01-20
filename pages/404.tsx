import { createStyles, Container, Title, Text, Button, Group } from '@mantine/core';

import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: 'relative',
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    paddingTop: 220,
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default function _404() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Image src={"/images/localib-logo.png"} alt={"localib"} width={264} height={264} className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>En roue libre !</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            La page que vous essayez d'ouvrir n'existe pas. Peut-être qu'il y a une erreur dans l'adresse?
            Si vous pensez que c'est une erreur, contacter le support.
          </Text>
          <Group position="center">
            <Button size="md" onClick={() => router.push("/")}>Ramenez-moi sur la route</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}