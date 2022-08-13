import { Check, Euro, Home, Payment, Smartphone } from "@mui/icons-material";
import {
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
  Button,
  Fab,
  Divider,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import betise from "../../images/betise.png";
import { Link } from "react-router-dom";
import AlertNotifyLouis from "./AlertNotifyLouis";

export default function Dormir() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Fab
          color="primary"
          aria-label="Accueil"
          sx={{
            margin: 0,
            bottom: "auto",
            left: 20,
            top: 20,
            right: "auto",
            position: "fixed",
          }}
        >
          <Home />
        </Fab>
      </Link>
      <Box mb={4}>
        <Box
          mb={2}
          display={{ xs: "block", sm: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            gutterBottom
            maxWidth="450px"
            fontSize="18px"
            padding="24px"
          >
            Pour ceux qui ont demandé à dormir sur place, notez le nom de votre
            gîte et réglez votre nuit dès à présent.{" "}
          </Typography>
          <Stack>
            <Alert severity="info" sx={{mb:2}}>
              <Typography gutterBottom>
                Les gîtes seront ouverts samedi matin 10 heure. En cas de
                soucis, contacter Olivier de Cambray (propriétaire) au 06 18 40
                03 09.
              </Typography>
            </Alert>
            <Alert severity="warning">
              <Typography gutterBottom>
                <Box fontWeight="Bold" display="inline" color="primary">
                  ATTENTION :{" "}
                </Box>
                Les draps sont fournis, mais pas les serviettes. Nous avons
                également acheté savon, shampoing et dentifrice pour tout le
                monde !
              </Typography>
            </Alert>
          </Stack>
        </Box>
      </Box>
      <Divider />
      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Pavillon du Régisseur
          </Typography>
          <Typography variant="body2">Commodités: 1 WC, 1 douche</Typography>
        </Box>
        <Chip
          label="31€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Noélie & Elisabeth</TableCell>
              <TableCell>Salle à Manger RdC</TableCell>
              <TableCell>1 lit double (canapé lit)</TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 62€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Marthe, Aubry et Victoire</TableCell>
              <TableCell>Chambre #1, 1er étage</TableCell>
              <TableCell>
                2 lits simples 1 lit bébé (prévoir un tapis de sol et duvet pour
                Victoire)
              </TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontSize="14px">Nicole & Justine</Typography>
                <br />
                <Typography fontSize="14px">Françoise J.</Typography>
              </TableCell>
              <TableCell>
                Chambre #2, 1er étage
                <br />
                <br />
              </TableCell>
              <TableCell>
                <Typography fontSize="14px">2 lits simples</Typography>
                <br />
                <Typography fontSize="14px">1 lit simple</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize="14px">62€</Typography>
                <br />
                <Typography fontSize="14px">31€</Typography>
              </TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Louis & Marianne</TableCell>
              <TableCell>Chambre #3, 1er étage</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Maison du Garde
          </Typography>
          <Typography variant="body2">Commodités: 2 WC, 1 douche</Typography>
        </Box>

        <Chip
          label="31€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Papé & Mamie</TableCell>
              <TableCell>Rez-de-chaussée</TableCell>
              <TableCell>1 lit double (canapé lit)</TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Catherine, Marion & Séverin</TableCell>
              <TableCell>Chambre #1, 1er étage</TableCell>
              <TableCell>2 lits simples 1 lit bébé</TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
              <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Christine, Anne-Marie, Roselyne</TableCell>
              <TableCell>Chambre #2, 1er étage</TableCell>
              <TableCell>3 lits simples</TableCell>
              <TableCell align="right">93€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 93€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pierre & Mireille</TableCell>
              <TableCell>Chambre #3, 1er étage</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">62€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Logis du cocher
          </Typography>
          <Typography variant="body2">Commodités: 1 WC, 1 douche</Typography>
        </Box>
        <Chip
          label="27.50€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Jacky & Roselyne</TableCell>
              <TableCell>Salon RdC</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">55€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Papou
                <br />
                <br />
                Jean-Yves
              </TableCell>
              <TableCell>
                Salon RdC
                <br />
                <br />
                <br />
              </TableCell>
              <TableCell>
                2 lit simples
                <br />
                <br />
                <br />
              </TableCell>
              <TableCell align="right">
                27.50€
                <br />
                <br />
                27.50€
              </TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
                <br />
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Annexe du Régisseur (Gîte de la Richer)
          </Typography>
          <Typography variant="body2">Commodités: 1 WC, 1 douche</Typography>
        </Box>

        <Chip
          label="27.50€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>François & Sylvana</TableCell>
              <TableCell>Chambre #1</TableCell>
              <TableCell>2 lits simples</TableCell>
              <TableCell align="right">55€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 55€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>François & Bernadette</TableCell>
              <TableCell>Chambre #2</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">55€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 55€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Dortoir Ecuries
          </Typography>
          <Typography variant="body2">
            Commodités: WC et douches partagées
          </Typography>
        </Box>
        <Chip
          label="26€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Shirley & Maxime</TableCell>
              <TableCell>Box #1</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">26€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 26€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Christian & Lara</TableCell>
              <TableCell>Box #2</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">26€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 26€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chloé & Côme</TableCell>
              <TableCell>Box #3</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">26€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 26€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Emeline & Mathieu</TableCell>
              <TableCell>Box #4</TableCell>
              <TableCell>1 lit double</TableCell>
              <TableCell align="right">26€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Dortoir Garage
          </Typography>
          <Typography variant="body2">
            Commodités: WC et douches partagées
          </Typography>
        </Box>
        <Chip
          label="22€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Colombe</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aurélien</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jean</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Domitille</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Johannes</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Emmanuel</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Clarisse</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Long</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Alix</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jean-Gabriel</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        sx={{ transform: "rotate(13deg)" }}
      >
        <img src={betise} alt="Bétise de Cambray" width="100px" />
      </Box>
      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Table */}
      {/* /////////////////////////// */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box mb={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Dortoir Remise aux Calèches
          </Typography>
          <Typography variant="body2">
            Commodités: WC et douches partagées
          </Typography>
        </Box>
        <Chip
          label="22€ / personne"
          icon={<Euro />}
          onClick={handleClick}
          color="primary"
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vos prénoms</TableCell>
              <TableCell>Votre chambre</TableCell>
              <TableCell>Votre lit</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Règlement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Marine</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bérengère</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
              <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Marion C.</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aurélie</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Flora</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cédric</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
              <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Florian</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Antoine</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vincent</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip
                  label="Payer 22€"
                  onClick={handleClick}
                  color="primary"
                  icon={<Payment />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Josquin</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maëlle</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Elvire</TableCell>
              <TableCell>Dortoir</TableCell>
              <TableCell>1 lit simple</TableCell>
              <TableCell align="right">22€</TableCell>
              <TableCell>
                <Chip label="Réglé" icon={<Check />} sx={{ mb: 1 }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* /////////////////////////// */}
      {/* // END Table */}
      {/* /////////////////////////// */}

      {/* /////////////////////////// */}
      {/* // START Dialog Modal OnClick */}
      {/* /////////////////////////// */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"🏰 Régler votre nuit au château"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" gutterBottom>
            M. de Cambray, propriétaire des lieux, nous a demandé de payer le
            logement pour tout le monde, par simplicité. Merci d'adresser le
            prix de votre lit à Louis Viallet en choissant un mode de paiement
            ci-dessous.
          </DialogContentText>

          {/* // START Accordion */}
          <Box mt={2}>
            <Accordion
              sx={{
                boxShadow:
                  "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontWeight={"bold"}>Payer par virement</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography mb={2}>
                  Rien de plus classique ! Voici les informations de paiement:
                </Typography>
                <Typography fontWeight={"bold"} fontSize={13}>
                  Titulaire du compte
                </Typography>
                <Typography fontSize={13}>M. VIALLET Louis</Typography>
                <Typography fontSize={13}>14 RUE DE STRASBOURG</Typography>
                <Typography fontSize={13}>92600 ASNIERES SUR SEINE</Typography>
                <Typography fontWeight={"bold"} mt={2} fontSize={13}>
                  IBAN
                </Typography>
                <Typography fontSize={13}>
                  FR76 4061 8802 9700 0400 0776 919
                </Typography>
                <Typography fontWeight={"bold"} mt={2} fontSize={13}>
                  BIC
                </Typography>
                <Typography fontSize={13}>
                  BOUS FRPP XXX
                </Typography>
                <AlertNotifyLouis />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow:
                  "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography fontWeight={"bold"}>Payer par Paypal </Typography>
                <Box pl={1}>
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    border="0"
                    alt="PayPal Logo"
                    height="18px"
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography mb={2}>
                  Cliquez sur "Ouvrir Paypal" puis cliquez sur "Envoyer".
                  Saisissez le montant de votre chambre, et voilà !
                </Typography>
                <AlertNotifyLouis />
                <Box mt={2}>
                  <Button
                    href="https://paypal.me/vialletlouis"
                    variant="contained"
                    target="_blank"
                  >
                    Ouvrir Paypal
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow:
                  "0px 11px 15px -7px rgb(53 53 128 / 20%), 0px 24px 38px 3px rgb(53 53 128 / 14%), 0px 9px 46px 8px rgb(53 53 128 / 12%)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography fontWeight={"bold"}>Payer par Lydia</Typography>
                <Smartphone ml={2} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography mb={2}>
                  Si vous avez Lydia, vous n’avez qu’à taper le numéro de Louis
                  (06 25 10 09 32), ainsi que le montant à envoyer. C’est tout !
                </Typography>
                <AlertNotifyLouis />
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* // END Accordion */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Terminé !
          </Button>
        </DialogActions>
      </Dialog>
      {/* /////////////////////////// */}
      {/* // END Dialog Modal OnClick */}
      {/* /////////////////////////// */}
    </div>
  );
}
