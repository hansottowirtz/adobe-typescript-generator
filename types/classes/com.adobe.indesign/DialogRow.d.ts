/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DialogRow extends Adobe.Csawlib.CSHostObject {
			/** A collection of angle comboboxes. */
			public readonly angleComboboxes: Adobe.Indesign.AngleComboboxes;
			/** A collection of angle editboxes. */
			public readonly angleEditboxes: Adobe.Indesign.AngleEditboxes;
			/** A collection of border panels. */
			public readonly borderPanels: Adobe.Indesign.BorderPanels;
			/** A collection of checkbox controls. */
			public readonly checkboxControls: Adobe.Indesign.CheckboxControls;
			/** A collection of dialog columns. */
			public readonly dialogColumns: Adobe.Indesign.DialogColumns;
			/** A collection of dropdowns. */
			public readonly dropdowns: Adobe.Indesign.Dropdowns;
			/** A collection of enabling groups. */
			public readonly enablingGroups: Adobe.Indesign.EnablingGroups;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the DialogRow. */
			public readonly id: number;
			/** The index of the DialogRow within its containing object. */
			public readonly index: number;
			/** A collection of integer comboboxes. */
			public readonly integerComboboxes: Adobe.Indesign.IntegerComboboxes;
			/** A collection of integer editboxes. */
			public readonly integerEditboxes: Adobe.Indesign.IntegerEditboxes;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of measurement comboboxes. */
			public readonly measurementComboboxes: Adobe.Indesign.MeasurementComboboxes;
			/** A collection of measurement editboxes. */
			public readonly measurementEditboxes: Adobe.Indesign.MeasurementEditboxes;
			/** The parent of the DialogRow (a DialogColumn). */
			public readonly parent: Adobe.Indesign.DialogColumn;
			/** A collection of percent comboboxes. */
			public readonly percentComboboxes: Adobe.Indesign.PercentComboboxes;
			/** A collection of percent editboxes. */
			public readonly percentEditboxes: Adobe.Indesign.PercentEditboxes;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of radiobutton groups. */
			public readonly radiobuttonGroups: Adobe.Indesign.RadiobuttonGroups;
			/** A collection of real number comboboxes. */
			public readonly realComboboxes: Adobe.Indesign.RealComboboxes;
			/** A collection of real number editboxes. */
			public readonly realEditboxes: Adobe.Indesign.RealEditboxes;
			/** A collection of static text objects. */
			public readonly staticTexts: Adobe.Indesign.StaticTexts;
			/** A collection of text editboxes. */
			public readonly textEditboxes: Adobe.Indesign.TextEditboxes;
			/** A collection of widgets. */
			public readonly widgets: Adobe.Indesign.Widgets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDialogRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDialogRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}