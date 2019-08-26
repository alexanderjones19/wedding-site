import Img from 'gatsby-image';
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Box } from 'reflexbox';

const chunk = (array, groupSize) => {
  const groups = [];
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize));
  }
  return groups;
};

const sum = (array) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);


const Gallery = ({
  images,
  itemsPerRow: itemsPerRowByBreakpoints = [1],
}) => {
  const aspectRatios = images.map(image => image.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios),
      ),
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const closeModal = () => setModalIsOpen(false);
  const openModal = (imageIndex) => {
    setModalCurrentIndex(imageIndex);
    setModalIsOpen(true);
  };

  return (
    <Box>
      {images.map((image, i) => (
        <a
          key={image.id}
          href={image.originalImg}
          onClick={(e) => {
            e.preventDefault();
            openModal(i);
          }}
        >
          <Box
            title={image.caption}
            width={rowAspectRatioSumsByBreakpoints.map(
              (rowAspectRatioSums, j) => {
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

                return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
              },
            )}
            css={`
              display: inline-block;
              vertical-align: middle;
              transition: filter 0.3s;
              :hover {
                filter: brightness(87.5%);
              }
            `}
            >
              <Img
                fluid={image}
              />
          </Box>
        </a>
      ))}
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map((image) => ({
                  source: image.src,
                  // source: {
                  //   fullscreen: image.srcSet[3],
                  //   regular: image.srcSet[1],
                  //   thumbnail: image.srcSet[1]
                  // },
                  caption: image.caption,
                }))}
                currentIndex={modalCurrentIndex}
                // components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Box>
  );
};

export default Gallery;