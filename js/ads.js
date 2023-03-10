		// Array of image URLs to cycle through
		var images = [
			'../pics/adult.jpg',
			'image2.jpg',
			'image3.jpg',
			'image4.jpg',
			'image5.jpg'
		];

		// Index of current image
		var currentImageIndex = 0;

		// Function to update the image in a popup window
		function updateImage() {
			// Create a new window
			var imageWindow = window.open('', 'Image', 'width=500,height=500');

			// Create an image element and set its source attribute to the current image URL
			var imageElement = document.createElement('img');
			imageElement.src = images[currentImageIndex];

			// Add the image to the window
			imageWindow.document.body.appendChild(imageElement);

			// Increment the current image index, wrapping around to 0 if necessary
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}

		// Call the updateImage function every 5 seconds
		setInterval(updateImage, 200000);