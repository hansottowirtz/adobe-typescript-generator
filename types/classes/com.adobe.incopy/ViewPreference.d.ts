/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ViewPreference extends Adobe.Incopy.Preference {
			/**
			 * The distance to move a specified object when an arrow key is 
			 * pressed. (Range depends on the measurement unit. For points: 
			 * 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 
			 * to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
			 * @type {any}
			 */
			public cursorKeyIncrement: any;
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
			 * The range (in pixels) within which an object snaps to 
			 * guides. (Range: 1 to 36) Note: Snapping occurs only when 
			 * guides are shown.
			 * @type {number}
			 */
			public guideSnaptoZone: number;
			/**
			 * The distance (in points) between major tick marks on the 
			 * horizontal ruler. (Range: 4 to 256) Valid only when 
			 * horizontal measurement units is custom.
			 * @type {number}
			 */
			public horizontalCustomPoints: number;
			/**
			 * The measurement unit for the horizontal ruler and other 
			 * horizontally-measured spaces such as grid columns, 
			 * horizontal offsets, column gutters, or others.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public horizontalMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ViewPreference (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The number of points per inch, typically 72. (Range: 60 to 
			 * 80)
			 * @type {number}
			 */
			public pointsPerInch: number;
			/**
			 * The measurement unit for the print dialog.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public printDialogMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The default zero point at the intersection of the vertical 
			 * and horizontal rulers and the scope of the horizontal ruler.
			 * @type {Adobe.Incopy.RulerOrigin}
			 */
			public rulerOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * If true, displays borders of unselected frames and the 
			 * diagonal lines in empty unselected frames.
			 * @type {boolean}
			 */
			public showFrameEdges: boolean;
			/**
			 * If true, notes are displayed.
			 * @type {boolean}
			 */
			public showNotes: boolean;
			/**
			 * If true, displays the horizontal and vertical rulers.
			 * @type {boolean}
			 */
			public showRulers: boolean;
			/**
			 * The measurement unit for stroke measurements.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public strokeMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * The measurement unit for text size measurements.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public textSizeMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * The measurement units for typography.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public typographicMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * The distance (in points) between major tick marks on the 
			 * vertical ruler. (Range: 4 to 256) Valid only when vertical 
			 * measurement units is custom.
			 * @type {number}
			 */
			public verticalCustomPoints: number;
			/**
			 * The measurement unit for the vertical ruler and other 
			 * vertically-measured spaces such as grid rows, vertical 
			 * offsets, row heights, or others.
			 * @type {Adobe.Incopy.MeasurementUnits}
			 */
			public verticalMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}