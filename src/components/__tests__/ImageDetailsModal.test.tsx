import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageDetailsModal from '../Molecules/ImageDetailsModal';
import '@testing-library/jest-dom';

// Mock data for an image to be passed to the ImageDetailsModal component
const mockImage = {
  id: '1',
  title: 'Test Image',
  description: 'Test Description',
  link: 'http://testimage.jpg',
  ups: 100,
  downs: 50,
  score: 75
};

/**
 * ImageDetailsModal Component Tests
 *
 * These tests check the ImageDetailsModal component for the following:
 * - It renders the correct image details based on the props.
 * - It calls the onClose function when the close button is clicked.
 */
describe('ImageDetailsModal Component', () => {
  test('renders image details correctly', () => {
    render(<ImageDetailsModal imageDetails={mockImage} onClose={() => {}} />);
    expect(screen.getByText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<ImageDetailsModal imageDetails={mockImage} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText('Close'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
