document.addEventListener("DOMContentLoaded", function() {
    fetch('sample1.json') // Make sure the path to your JSON file is correct
        .then(response => response.json())
        .then(data => {
            const collegesContainer = document.getElementById('colleges-container');

            data.forEach(college => {
                // Create a container for each college
                const collegeDiv = document.createElement('div');
                collegeDiv.classList.add('college');

                // Add college code and name
                const collegeInfo = document.createElement('div');
                collegeInfo.classList.add('college-info');
                
                const collegeCode = document.createElement('div');
                collegeCode.classList.add('college-code');
                collegeCode.textContent = `College Code: ${college['College Code']}`;

                const collegeName = document.createElement('div');
                collegeName.classList.add('college-name');
                collegeName.textContent = college['College Name'];

                collegeInfo.appendChild(collegeCode);
                collegeInfo.appendChild(collegeName);

                collegeDiv.appendChild(collegeInfo);

                // Create a table for branches
                const table = document.createElement('table');
                const thead = document.createElement('thead');
                const tbody = document.createElement('tbody');

                // Add table headers
                const headerRow = document.createElement('tr');
                const headers = ['Branch Code', 'Branch Name', 'OC', 'BC', 'BCM', 'MBC', 'MBCDNC', 'MBCV', 'SC', 'SCA', 'ST'];
                headers.forEach(header => {
                    const th = document.createElement('th');
                    th.textContent = header;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Add table rows for each branch
                college.Branches.forEach(branch => {
                    const tr = document.createElement('tr');
                    Object.values(branch).forEach(value => {
                        const td = document.createElement('td');
                        td.textContent = value !== null ? value : '-';
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                collegeDiv.appendChild(table);

                // Append the college div to the container
                collegesContainer.appendChild(collegeDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
