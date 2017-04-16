/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Window */
		class LayoutWindow extends Adobe.Indesign.Window {
			/** The active layer. Can also accept: String. */
			public activeLayer: Adobe.Indesign.Layer;
			/** The front-most page. */
			public activePage: Adobe.Indesign.Page;
			/** The front-most spread. Can return: Spread or MasterSpread. */
			public activeSpread: any;
			/**
			 * Dispatched after the LayoutWindow becomes active. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched when the value of a property changes on this 
			 * LayoutWindow. This event bubbles. This event is not 
			 * cancelable.
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched when a LayoutWindow is closing. Since the close 
			 * has been committed, it can no longer be canceled. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after a LayoutWindow is opened. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Dispatched before a LayoutWindow is closed. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the LayoutWindow becomes inactive. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * The bounds of the window (specified in pixels) in the form 
			 * [top, left, bottom, right].
			 */
			public bounds: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the LayoutWindow within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the LayoutWindow. */
			public readonly name: string;
			/** If true, display a simulation of overprinting. */
			public overprintPreview: boolean;
			/** The parent of the LayoutWindow (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * If true, leaves color values unchanged for CMYK objects 
			 * without embedded profiles and native objects such as line 
			 * art or type. Note: Converts images whose profiles differ 
			 * from the profile of the simulated device. Valid only when 
			 * proofing type is custom.
			 */
			public preserveColorNumbers: boolean;
			/** The profile used for proofing colors. */
			public proofingProfile: string;
			/** The method of proofing colors. */
			public proofingType: Adobe.Indesign.ProofingType;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The screen mode for layout view. */
			public screenMode: Adobe.Indesign.ScreenModeOptions;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 */
			public selection: any;
			/**
			 * The key object of the selection. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public selectionKeyObject: Adobe.Indesign.PageItem;
			/**
			 * If true, simulates the dark gray produced by many printers 
			 * in place of solid black, according to the proofing profile. 
			 * Note: Valid only when proofing type is custom.
			 */
			public simulateInkBlack: boolean;
			/**
			 * If true, simulates the dingy white of real paper, according 
			 * to the proofing profile. Note: Valid only when proofing type 
			 * is custom.
			 */
			public simulatePaperWhite: boolean;
			/**
			 * The default anchor point around which to transform objects. 
			 * Can return: AnchorPoint enumerator or Array of 2 Units.
			 */
			public transformReferencePoint: any;
			/** The display performance preferences override for the view. */
			public viewDisplaySetting: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * The size (as a percentage) to which to enlarge or reduce the 
			 * view of the document. (Range: 5 to 4000)
			 */
			public zoomPercentage: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLayoutWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Brings the object to the front. */
			public bringToFront(): void;
			/** Closes the LayoutWindow. */
			public close(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Maximizes the window. */
			public maximize(): void;
			/** Minimizes the window. */
			public minimize(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerLayoutWindow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Restores the window. */
			public restore(): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam The objects to select. Can 
			 * accept: Object, Array of Objects, NothingEnum enumerator or 
			 * SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the LayoutWindow in relation to 
			 * previously selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Magnifies or reduces the window to the specified display 
			 * size.
			 * @param {ZoomOptions} givenParam The display size.
			 */
			public zoom(givenParam: ZoomOptions): void;
		}
	}
}