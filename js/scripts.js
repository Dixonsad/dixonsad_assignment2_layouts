document.addEventListener('DOMContentLoaded', () => { //wait to run, load first
    const mainElement = document.querySelector('main');
    const eventCards = document.querySelectorAll('.event-card');
    let savedEventsCount = 0;

    
    const savedSection = document.createElement('section'); //saved event summary
    savedSection.classList.add('saved-events-section');
    savedSection.id = 'saved-events-summary';

    const savedHeading = document.createElement('h2');
    savedHeading.textContent = 'Saved Events Summary';
    savedSection.appendChild(savedHeading);

    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No events have been saved yet.';
    emptyMessage.classList.add('empty-message');
    savedSection.appendChild(emptyMessage);

    const savedList = document.createElement('ul');
    savedList.classList.add('saved-events-list');
    savedSection.appendChild(savedList);

    mainElement.appendChild(savedSection);

   
    eventCards.forEach((card) => { //loop event cards
    
        const titleText = card.querySelector('h3').textContent;
        const timeText = card.querySelector('time').textContent;
        const locationText = card.querySelector('.location').textContent;

        
        const saveBtn = document.createElement('button'); //Save event button
        saveBtn.textContent = 'Save Event';
        saveBtn.classList.add('btn-save');

       
        let savedListItemReference = null; //track listed item

        
        saveBtn.addEventListener('click', () => {
            
            
            if (saveBtn.classList.contains('remove')) {
               
                
                
                saveBtn.classList.remove('remove');
                saveBtn.textContent = 'Save Event';
                card.classList.remove('saved-event');

               
                if (savedListItemReference) {
                    savedList.removeChild(savedListItemReference);
                    savedListItemReference = null; // Clear the reference
                    savedEventsCount--;
                }
            } else {
               
                saveBtn.classList.add('remove');
                saveBtn.textContent = 'Remove Event';
                card.classList.add('saved-event');

            
                const li = document.createElement('li');

                const liTitle = document.createElement('h4');
                liTitle.textContent = titleText;
                li.appendChild(liTitle);

                const liTime = document.createElement('p');
                liTime.textContent = timeText;
                li.appendChild(liTime);

                const liLocation = document.createElement('p');
                liLocation.textContent = locationText;
                li.appendChild(liLocation);

               
                savedList.appendChild(li);
                
              
                savedListItemReference = li; 
                savedEventsCount++;
            }

            
            if (savedEventsCount > 0) {
                emptyMessage.style.display = 'none';
            } else {
                emptyMessage.style.display = 'block';
            }
        });

      
        const cardContent = card.querySelector('.card-content');
        cardContent.appendChild(saveBtn);
    });
});