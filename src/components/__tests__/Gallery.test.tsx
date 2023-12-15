import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../Organisms/Gallery';
import '@testing-library/jest-dom';

interface MockImageDetailsModalProps {
  imageDetails: {
    title: string;
  };
  onClose: () => void;
}

// Mocks the ImageDetailsModal component for testing.
// This ensures that tests focus on the Gallery component's behavior.
jest.mock('../Molecules/ImageDetailsModal', () => {
  const MockImageDetailsModal = (props: MockImageDetailsModalProps) => (
    <div data-testid="mock-image-details-modal">
      Mocked Modal: {props.imageDetails.title}
      <button onClick={props.onClose}>Close Modal</button>
    </div>
  );

  MockImageDetailsModal.displayName = 'MockImageDetailsModal';

  return MockImageDetailsModal;
});

// Sample images data used for testing the Gallery component.
const mockImages = [
  { id: '1', title: 'Image 1', description: 'Desc 1', imageUrl: 'http://image1.jpg', images: [] },
  { id: '2', title: 'Image 2', description: 'Desc 2', imageUrl: 'http://image2.jpg', images: [{type: 'video/mp4'}]},
  { id: '3', title: 'Image 3', description: 'Desc 3', imageUrl: 'http://image3.jpg', images: [] },
];

// Test suite for Gallery component
describe('Gallery Component', () => {

  // Test to check if the Gallery component renders images correctly.
  test('renders images correctly', () => {
    render(<Gallery images={mockImages} />);
    const images = screen.getAllByRole('img') as HTMLImageElement[];

    expect(images).toHaveLength(mockImages.length);
    // Check if the alt text is correctly set
    expect(images[0].alt).toBe('Image 1');

    // Optionally, check if the image URL is encoded in the src attribute
    const encodedImageUrl = encodeURIComponent('http://image1.jpg');
    expect(images[0].src).toContain(encodedImageUrl);
  });


  // Test to verify if the modal opens upon clicking an image.
  test('opens modal on image click', () => {
    render(<Gallery images={mockImages} />);
    const firstImageCard = screen.getByText('Image 1').closest('div');
    if (firstImageCard) {
      fireEvent.click(firstImageCard);
    }
    const modal = screen.getByTestId('mock-image-details-modal');
    expect(modal).toHaveTextContent('Mocked Modal: Image 1');
  });

  // Test to confirm that the modal closes when the close button is clicked.
  test('closes modal on close button click', () => {
    render(<Gallery images={mockImages} />);
    const firstImageCard = screen.getByText('Image 1').closest('div');
    if (firstImageCard) {
      fireEvent.click(firstImageCard);
    }
    const closeButton = screen.getByText('Close Modal');
    fireEvent.click(closeButton);
    const modal = screen.queryByTestId('mock-image-details-modal');
    expect(modal).not.toBeInTheDocument();
  });

});
