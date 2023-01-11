import Table from 'react-bootstrap/Table';
import DropdownButton from './DropdownButton';
import * as React from 'react';
function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <div>
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <th>Package</th>
          <th>Rate (In sqft)</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>

          <td>Civil 1</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <DropdownButton />
          </td>
        </tr>
        <tr>
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>

          <td>Civil 2</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <DropdownButton />
          </td>
        </tr>
        <tr>
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>

          <td>Civil 3</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <DropdownButton />
          </td>
        </tr>
        <tr>
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>

          <td>Civil 4</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <DropdownButton />
          </td>
        </tr>
        <tr>
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>

          <td>Civil 5</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <DropdownButton />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
