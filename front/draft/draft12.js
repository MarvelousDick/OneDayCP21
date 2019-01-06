const OBJECT_ITEMS = [{
    label: 'Apples',
    value: 'A',
}, {
    label: 'Bananas',
    value: 'B',
}, {
    label: 'Cherries',
    value: 'C',
}, {
    label: 'Durian',
    value: 'D',
}, {
    label: 'Elderberry',
    value: 'E',
}];

const icon = <SVGIcon use={arrowDropDown.url} />;

const Simple = ({ simplifiedMenu }) => (
    <div className="md-grid">
        <h4 className="md-cell md-cell--12">Normal SelectFields</h4>
        <SelectField
            id="select-field-1"
            label="Numbers"
            placeholder="Placeholder"
            className="md-cell"
            menuItems={NUMBER_ITEMS}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-2"
            label="Strings"
            placeholder="Placeholder"
            className="md-cell"
            menuItems={STRING_ITEMS}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-3"
            label="Objects"
            placeholder="Placeholder"
            className="md-cell"
            menuItems={OBJECT_ITEMS}
            simplifiedMenu={simplifiedMenu}
        />
        <h4 className="md-cell md-cell--12">SelectField Buttons</h4>
        <SelectField
            id="select-field-4"
            placeholder="Numbers button"
            className="md-cell"
            menuItems={NUMBER_ITEMS}
            position={SelectField.Positions.BELOW}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-5"
            placeholder="Strings button"
            className="md-cell"
            menuItems={STRING_ITEMS}
            position={SelectField.Positions.BELOW}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-6"
            placeholder="Objects button"
            className="md-cell"
            menuItems={OBJECT_ITEMS}
            position={SelectField.Positions.BELOW}
            simplifiedMenu={simplifiedMenu}
        />
        <h4 className="md-cell md-cell--12">Using SVGIcons</h4>
        <SelectField
            id="select-field-7"
            label="Numbers"
            placeholder="Placeholder"
            className="md-cell md-cell--bottom"
            menuItems={NUMBER_ITEMS}
            dropdownIcon={icon}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-8"
            placeholder="Strings button"
            className="md-cell md-cell--bottom"
            menuItems={STRING_ITEMS}
            position={SelectField.Positions.BELOW}
            dropdownIcon={icon}
            simplifiedMenu={simplifiedMenu}
        />
        <SelectField
            id="select-field-9"
            placeholder="Strings disabled"
            className="md-cell md-cell--bottom"
            menuItems={STRING_ITEMS}
            disabled
            dropdownIcon={icon}
            simplifiedMenu={simplifiedMenu}
        />
    </div>
);