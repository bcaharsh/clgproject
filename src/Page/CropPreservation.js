import React from 'react';
import Navigation from '../Component/Navigation';
import Footer from '../Component/Footer';
import DialogCrop from '../Component/DialogCrop';
import Contentbox from '../Component/Contentbox';

export default function CropPreservation() {
  return (
    <div>
      <Navigation/>
      <Contentbox/>
      <DialogCrop/>
      <Footer/>
    </div>
  )
}
