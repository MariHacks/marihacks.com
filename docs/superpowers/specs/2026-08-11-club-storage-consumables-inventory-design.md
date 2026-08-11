# Club Storage Consumables Inventory

## Purpose

Provide a Google Sheets-import-ready inventory for consumable supplies held in the Club Storage Room.

## Workbook structure

- `Inventory`: the primary, editable table.
- `Reference Lists`: editable values supporting Category and Unit dropdowns.

## Inventory fields

| Field | Purpose |
| --- | --- |
| Picture | Embedded thumbnail when a photo is supplied. |
| Item ID | A stable identifier assigned by Codex. |
| Item Name | The supply name. |
| Category | A consistent classification selected from a dropdown. |
| Description | Short distinguishing detail. |
| Unit | The countable unit selected from a dropdown. |
| Storage Location | Prefilled as `Club Storage Room`. |
| Quantity on Hand | Current available quantity. |
| Reorder Point | Optional minimum quantity that flags low stock. |
| Unit Cost | Optional cost per unit. |
| Last Received | Latest restock date. |
| Last Counted | Latest physical-count date. |
| Notes | Optional handling or context. |

## Behavior and presentation

- Freeze the header row, enable table filters, and hide default gridlines.
- Highlight a quantity that falls at or below its reorder point.
- Keep the template to these agreed fields; exclude suppliers, target stock, quantity to order, stock value, lot or batch numbers, expiry dates, counted-by, and status.
- When the user provides a picture, embed it as a thumbnail in the matching row.

## Initial entry

`CS-001` is a MariHacks small tote bag. The user counted 27 units and supplied a photo. Its storage location is Club Storage Room.

## Verification

Export an `.xlsx`, inspect the values and formula ranges, scan for formula errors, and render each sheet to check that the layout is legible and un-clipped.
