import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { projects } from '../data/projects';
import Card from './Card';

const Resume = () => {
    const [show, setShow] = useState({
        openDeleteModal: false,
        activeItem: []
    });

    const handleClose = () => setShow({ openDeleteModal: false, activeItem: [] });

    const openModalWithItem = project => {
        setShow({
            openDeleteModal: true,
            activeItem: project
        });
    }

    return (
        <div className="portfolio" id="portfolio">
            <h2 className="portf__title">PORTFOLIO</h2>
            <div className="star__style">
                <i className="fa fa-star"></i>
            </div>
            <div className="projects">
                {
                    projects.map(project => <Card key={project.id} bgColor={project.bgcolor} imgSrc={project.img} click={() => openModalWithItem(project)} />)
                }
            </div>
            <Modal show={show.openDeleteModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.activeItem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {show.activeItem.desc}
                    <img src={show.activeItem.imgPrj} className="img-fluid" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Resume;