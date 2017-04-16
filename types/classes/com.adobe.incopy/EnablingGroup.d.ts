/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Widget */
		class EnablingGroup extends Adobe.Incopy.Widget {
			/** A collection of angle comboboxes. */
			public readonly angleComboboxes: Adobe.Incopy.AngleComboboxes;
			/** A collection of angle editboxes. */
			public readonly angleEditboxes: Adobe.Incopy.AngleEditboxes;
			/** A collection of border panels. */
			public readonly borderPanels: Adobe.Incopy.BorderPanels;
			/** A collection of checkbox controls. */
			public readonly checkboxControls: Adobe.Incopy.CheckboxControls;
			/** If true, the control is checked by default in the dialog. */
			public checkedState: boolean;
			/** A collection of dialog columns. */
			public readonly dialogColumns: Adobe.Incopy.DialogColumns;
			/** A collection of dropdowns. */
			public readonly dropdowns: Adobe.Incopy.Dropdowns;
			/** A collection of enabling groups. */
			public readonly enablingGroups: Adobe.Incopy.EnablingGroups;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the EnablingGroup. */
			public readonly id: number;
			/**
			 * The index of the EnablingGroup within its containing object.
			 */
			public readonly index: number;
			/** A collection of integer comboboxes. */
			public readonly integerComboboxes: Adobe.Incopy.IntegerComboboxes;
			/** A collection of integer editboxes. */
			public readonly integerEditboxes: Adobe.Incopy.IntegerEditboxes;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of measurement comboboxes. */
			public readonly measurementComboboxes: Adobe.Incopy.MeasurementComboboxes;
			/** A collection of measurement editboxes. */
			public readonly measurementEditboxes: Adobe.Incopy.MeasurementEditboxes;
			/**
			 * The width of the control. For an editbox or combobox, 
			 * specifies the minimum width of the box.
			 */
			public minWidth: number;
			/**
			 * The parent of the EnablingGroup (a DialogColumn, DialogRow, 
			 * EnablingGroup or BorderPanel).
			 */
			public readonly parent: any;
			/** A collection of percent comboboxes. */
			public readonly percentComboboxes: Adobe.Incopy.PercentComboboxes;
			/** A collection of percent editboxes. */
			public readonly percentEditboxes: Adobe.Incopy.PercentEditboxes;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of radiobutton groups. */
			public readonly radiobuttonGroups: Adobe.Incopy.RadiobuttonGroups;
			/** A collection of real number comboboxes. */
			public readonly realComboboxes: Adobe.Incopy.RealComboboxes;
			/** A collection of real number editboxes. */
			public readonly realEditboxes: Adobe.Incopy.RealEditboxes;
			/** Text that appears in the EnablingGroup. */
			public staticLabel: string;
			/** A collection of static text objects. */
			public readonly staticTexts: Adobe.Incopy.StaticTexts;
			/** A collection of text editboxes. */
			public readonly textEditboxes: Adobe.Incopy.TextEditboxes;
			/** A collection of widgets. */
			public readonly widgets: Adobe.Incopy.Widgets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerEnablingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerEnablingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}