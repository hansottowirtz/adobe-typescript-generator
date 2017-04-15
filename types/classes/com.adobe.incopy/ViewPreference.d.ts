/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ViewPreference extends Adobe.Incopy.Preference {
			/**
			 * The distance to move a specified object when an arrow key is 
			 * pressed. (Range depends on the measurement unit. For points: 
			 * 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 
			 * to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
			 */
			public cursorKeyIncrement: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The range (in pixels) within which an object snaps to 
			 * guides. (Range: 1 to 36) Note: Snapping occurs only when 
			 * guides are shown.
			 */
			public guideSnaptoZone: number;
			/**
			 * The distance (in points) between major tick marks on the 
			 * horizontal ruler. (Range: 4 to 256) Valid only when 
			 * horizontal measurement units is custom.
			 */
			public horizontalCustomPoints: number;
			/**
			 * The measurement unit for the horizontal ruler and other 
			 * horizontally-measured spaces such as grid columns, 
			 * horizontal offsets, column gutters, or others.
			 */
			public horizontalMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ViewPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * The number of points per inch, typically 72. (Range: 60 to 
			 * 80)
			 */
			public pointsPerInch: number;
			/** The measurement unit for the print dialog. */
			public printDialogMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The default zero point at the intersection of the vertical 
			 * and horizontal rulers and the scope of the horizontal ruler.
			 */
			public rulerOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * If true, displays borders of unselected frames and the 
			 * diagonal lines in empty unselected frames.
			 */
			public showFrameEdges: boolean;
			/** If true, notes are displayed. */
			public showNotes: boolean;
			/** If true, displays the horizontal and vertical rulers. */
			public showRulers: boolean;
			/** The measurement unit for stroke measurements. */
			public strokeMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/** The measurement unit for text size measurements. */
			public textSizeMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/** The measurement units for typography. */
			public typographicMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * The distance (in points) between major tick marks on the 
			 * vertical ruler. (Range: 4 to 256) Valid only when vertical 
			 * measurement units is custom.
			 */
			public verticalCustomPoints: number;
			/**
			 * The measurement unit for the vertical ruler and other 
			 * vertically-measured spaces such as grid rows, vertical 
			 * offsets, row heights, or others.
			 */
			public verticalMeasurementUnits: Adobe.Incopy.MeasurementUnits;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerViewPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}