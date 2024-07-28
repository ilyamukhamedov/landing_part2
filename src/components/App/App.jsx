import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Author from "../Author/Author";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import Fragment from "../Fragment/Fragment";
import Footer from "../Footer/Footer";
import Policy from "../Policy/Policy";
import ModalPreview from "../ModalPreview/ModalPreview";
import Modal from "../Modal/Modal";

const App = () => {
  const [open, setOpen] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenPreview = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  return (
    <div className="app">
      <Header isOpen={handleOpen} />
      <Author />
      <About />
      <Fragment handleOpen={handleOpenPreview} />
      <Reviews />
      <Policy isOpen={handleOpen} />
      <Footer />
      <Modal isOpen={open} onClose={handleClose} />
      <ModalPreview
        isOpen={openPreview}
        onClose={handleClosePreview}
        imageSrc={currentImage}
      />
    </div>
  );
};

export default App;
