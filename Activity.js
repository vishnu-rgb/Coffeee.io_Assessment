import Table from 'react-bootstrap/Table';
import Workitem from './Workitem';
import * as React from 'react';
function Activity() {
  return (
    <Table striped bordered hover>
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

          <td>Activity 1</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <Workitem />
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

          <td>Activity 2</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <Workitem />
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

          <td>Activity 3</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <Workitem />
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

          <td>Activity 4</td>
          <td>567.80</td>
          <td>₹2,96,6792</td>
          <td>
            <Workitem />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Activity;
