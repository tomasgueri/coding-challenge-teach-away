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
  { id: '1', title: 'Image 1', description: 'Desc 1', imageUrl: 'http://image1.jpg', images: [], tags: [], isVideo: false },
  { id: '2', title: 'Image 2', description: 'Desc 2', imageUrl: 'http://image2.jpg', images: [], tags: [], isVideo: false },
  { id: '3', title: 'Image 3', description: 'Desc 3', imageUrl: 'http://image3.jpg', images: [], tags: [], isVideo: false },
];

// Test suite for Gallery component
describe('Gallery Component', () => {

  // Since we're mocking next/image, we can't use getAllByRole('img')
  // Test to check if the Gallery renders the correct image details based on the props.
  test('renders images correctly', () => {
    render(<Gallery data={mockImages} />);
    expect(screen.getByText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Desc 2')).toBeInTheDocument();
  });


  // Test to verify if the modal opens upon clicking an image.
  test('opens modal on image click', () => {
    render(<Gallery data={mockImages} />);
    const firstImageCard = screen.getByText('Image 1').closest('div');
    if (firstImageCard) {
      fireEvent.click(firstImageCard);
    }
    const modal = screen.getByTestId('mock-image-details-modal');
    expect(modal).toHaveTextContent('Mocked Modal: Image 1');
  });

  // Test to confirm that the modal closes when the close button is clicked.
  test('closes modal on close button click', () => {
    render(<Gallery data={mockImages} />);
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
