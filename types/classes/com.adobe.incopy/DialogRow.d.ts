/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DialogRow extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of angle comboboxes.
			 * @type {Adobe.Incopy.AngleComboboxes}
			 * @readonly
			 */
			public readonly angleComboboxes: Adobe.Incopy.AngleComboboxes;
			/**
			 * A collection of angle editboxes.
			 * @type {Adobe.Incopy.AngleEditboxes}
			 * @readonly
			 */
			public readonly angleEditboxes: Adobe.Incopy.AngleEditboxes;
			/**
			 * A collection of border panels.
			 * @type {Adobe.Incopy.BorderPanels}
			 * @readonly
			 */
			public readonly borderPanels: Adobe.Incopy.BorderPanels;
			/**
			 * A collection of checkbox controls.
			 * @type {Adobe.Incopy.CheckboxControls}
			 * @readonly
			 */
			public readonly checkboxControls: Adobe.Incopy.CheckboxControls;
			/**
			 * A collection of dialog columns.
			 * @type {Adobe.Incopy.DialogColumns}
			 * @readonly
			 */
			public readonly dialogColumns: Adobe.Incopy.DialogColumns;
			/**
			 * A collection of dropdowns.
			 * @type {Adobe.Incopy.Dropdowns}
			 * @readonly
			 */
			public readonly dropdowns: Adobe.Incopy.Dropdowns;
			/**
			 * A collection of enabling groups.
			 * @type {Adobe.Incopy.EnablingGroups}
			 * @readonly
			 */
			public readonly enablingGroups: Adobe.Incopy.EnablingGroups;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The unique ID of the DialogRow.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the DialogRow within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of integer comboboxes.
			 * @type {Adobe.Incopy.IntegerComboboxes}
			 * @readonly
			 */
			public readonly integerComboboxes: Adobe.Incopy.IntegerComboboxes;
			/**
			 * A collection of integer editboxes.
			 * @type {Adobe.Incopy.IntegerEditboxes}
			 * @readonly
			 */
			public readonly integerEditboxes: Adobe.Incopy.IntegerEditboxes;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of measurement comboboxes.
			 * @type {Adobe.Incopy.MeasurementComboboxes}
			 * @readonly
			 */
			public readonly measurementComboboxes: Adobe.Incopy.MeasurementComboboxes;
			/**
			 * A collection of measurement editboxes.
			 * @type {Adobe.Incopy.MeasurementEditboxes}
			 * @readonly
			 */
			public readonly measurementEditboxes: Adobe.Incopy.MeasurementEditboxes;
			/**
			 * The parent of the DialogRow (a DialogColumn).
			 * @type {Adobe.Incopy.DialogColumn}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.DialogColumn;
			/**
			 * A collection of percent comboboxes.
			 * @type {Adobe.Incopy.PercentComboboxes}
			 * @readonly
			 */
			public readonly percentComboboxes: Adobe.Incopy.PercentComboboxes;
			/**
			 * A collection of percent editboxes.
			 * @type {Adobe.Incopy.PercentEditboxes}
			 * @readonly
			 */
			public readonly percentEditboxes: Adobe.Incopy.PercentEditboxes;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radiobutton groups.
			 * @type {Adobe.Incopy.RadiobuttonGroups}
			 * @readonly
			 */
			public readonly radiobuttonGroups: Adobe.Incopy.RadiobuttonGroups;
			/**
			 * A collection of real number comboboxes.
			 * @type {Adobe.Incopy.RealComboboxes}
			 * @readonly
			 */
			public readonly realComboboxes: Adobe.Incopy.RealComboboxes;
			/**
			 * A collection of real number editboxes.
			 * @type {Adobe.Incopy.RealEditboxes}
			 * @readonly
			 */
			public readonly realEditboxes: Adobe.Incopy.RealEditboxes;
			/**
			 * A collection of static text objects.
			 * @type {Adobe.Incopy.StaticTexts}
			 * @readonly
			 */
			public readonly staticTexts: Adobe.Incopy.StaticTexts;
			/**
			 * A collection of text editboxes.
			 * @type {Adobe.Incopy.TextEditboxes}
			 * @readonly
			 */
			public readonly textEditboxes: Adobe.Incopy.TextEditboxes;
			/**
			 * A collection of widgets.
			 * @type {Adobe.Incopy.Widgets}
			 * @readonly
			 */
			public readonly widgets: Adobe.Incopy.Widgets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerDialogRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerDialogRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}