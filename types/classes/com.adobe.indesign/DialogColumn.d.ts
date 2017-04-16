/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DialogColumn extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of angle comboboxes.
			 * @type {Adobe.Indesign.AngleComboboxes}
			 * @readonly
			 */
			public readonly angleComboboxes: Adobe.Indesign.AngleComboboxes;
			/**
			 * A collection of angle editboxes.
			 * @type {Adobe.Indesign.AngleEditboxes}
			 * @readonly
			 */
			public readonly angleEditboxes: Adobe.Indesign.AngleEditboxes;
			/**
			 * A collection of border panels.
			 * @type {Adobe.Indesign.BorderPanels}
			 * @readonly
			 */
			public readonly borderPanels: Adobe.Indesign.BorderPanels;
			/**
			 * A collection of checkbox controls.
			 * @type {Adobe.Indesign.CheckboxControls}
			 * @readonly
			 */
			public readonly checkboxControls: Adobe.Indesign.CheckboxControls;
			/**
			 * A collection of dialog rows.
			 * @type {Adobe.Indesign.DialogRows}
			 * @readonly
			 */
			public readonly dialogRows: Adobe.Indesign.DialogRows;
			/**
			 * A collection of dropdowns.
			 * @type {Adobe.Indesign.Dropdowns}
			 * @readonly
			 */
			public readonly dropdowns: Adobe.Indesign.Dropdowns;
			/**
			 * A collection of enabling groups.
			 * @type {Adobe.Indesign.EnablingGroups}
			 * @readonly
			 */
			public readonly enablingGroups: Adobe.Indesign.EnablingGroups;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The unique ID of the DialogColumn.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the DialogColumn within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of integer comboboxes.
			 * @type {Adobe.Indesign.IntegerComboboxes}
			 * @readonly
			 */
			public readonly integerComboboxes: Adobe.Indesign.IntegerComboboxes;
			/**
			 * A collection of integer editboxes.
			 * @type {Adobe.Indesign.IntegerEditboxes}
			 * @readonly
			 */
			public readonly integerEditboxes: Adobe.Indesign.IntegerEditboxes;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of measurement comboboxes.
			 * @type {Adobe.Indesign.MeasurementComboboxes}
			 * @readonly
			 */
			public readonly measurementComboboxes: Adobe.Indesign.MeasurementComboboxes;
			/**
			 * A collection of measurement editboxes.
			 * @type {Adobe.Indesign.MeasurementEditboxes}
			 * @readonly
			 */
			public readonly measurementEditboxes: Adobe.Indesign.MeasurementEditboxes;
			/**
			 * The parent of the DialogColumn (a Dialog, DialogRow, 
			 * EnablingGroup or BorderPanel).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of percent comboboxes.
			 * @type {Adobe.Indesign.PercentComboboxes}
			 * @readonly
			 */
			public readonly percentComboboxes: Adobe.Indesign.PercentComboboxes;
			/**
			 * A collection of percent editboxes.
			 * @type {Adobe.Indesign.PercentEditboxes}
			 * @readonly
			 */
			public readonly percentEditboxes: Adobe.Indesign.PercentEditboxes;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radiobutton groups.
			 * @type {Adobe.Indesign.RadiobuttonGroups}
			 * @readonly
			 */
			public readonly radiobuttonGroups: Adobe.Indesign.RadiobuttonGroups;
			/**
			 * A collection of real number comboboxes.
			 * @type {Adobe.Indesign.RealComboboxes}
			 * @readonly
			 */
			public readonly realComboboxes: Adobe.Indesign.RealComboboxes;
			/**
			 * A collection of real number editboxes.
			 * @type {Adobe.Indesign.RealEditboxes}
			 * @readonly
			 */
			public readonly realEditboxes: Adobe.Indesign.RealEditboxes;
			/**
			 * A collection of static text objects.
			 * @type {Adobe.Indesign.StaticTexts}
			 * @readonly
			 */
			public readonly staticTexts: Adobe.Indesign.StaticTexts;
			/**
			 * A collection of text editboxes.
			 * @type {Adobe.Indesign.TextEditboxes}
			 * @readonly
			 */
			public readonly textEditboxes: Adobe.Indesign.TextEditboxes;
			/**
			 * A collection of widgets.
			 * @type {Adobe.Indesign.Widgets}
			 * @readonly
			 */
			public readonly widgets: Adobe.Indesign.Widgets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerDialogColumn(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerDialogColumn(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}