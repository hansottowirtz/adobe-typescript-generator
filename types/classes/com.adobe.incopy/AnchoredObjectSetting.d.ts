/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class AnchoredObjectSetting extends Adobe.Incopy.Preference {
			/**
			 * The position of the anchored object relative to the anchor.
			 * @type {Adobe.Incopy.AnchorPosition}
			 */
			public anchoredPosition: Adobe.Incopy.AnchorPosition;
			/**
			 * The point in the anchored object to position.
			 * @type {Adobe.Incopy.AnchorPoint}
			 */
			public anchorPoint: Adobe.Incopy.AnchorPoint;
			/**
			 * The space above an above-line anchored object.
			 * @type {any}
			 */
			public anchorSpaceAbove: any;
			/**
			 * The horizontal (x) offset of the anchored object.
			 * @type {any}
			 */
			public anchorXoffset: any;
			/**
			 * The vertical (y) offset of the anchored object. Corresponds 
			 * to the space after property for above line positioning.
			 * @type {any}
			 */
			public anchorYoffset: any;
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
			 * When anchored position is above line, the position of the 
			 * anchored object is relative to the text area. When anchored 
			 * position is custom, the horizontal alignment of the anchored 
			 * object is set by the horizontal reference point. Note: Not 
			 * valid when anchored position is inline.
			 * @type {Adobe.Incopy.HorizontalAlignment}
			 */
			public horizontalAlignment: Adobe.Incopy.HorizontalAlignment;
			/**
			 * The horizontal reference point on the page. Valid only when 
			 * anchored position is custom.
			 * @type {Adobe.Incopy.AnchoredRelativeTo}
			 */
			public horizontalReferencePoint: Adobe.Incopy.AnchoredRelativeTo;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, prevents manual positioning of the anchored object.
			 * @type {boolean}
			 */
			public lockPosition: boolean;
			/**
			 * The parent of the AnchoredObjectSetting (a Application, 
			 * Document, EPSText, SplineItem, Polygon, GraphicLine, 
			 * Rectangle, Oval, Group, TextFrame, Button, FormField, 
			 * SignatureField, TextBox, RadioButton, ListBox, ComboBox, 
			 * CheckBox or MultiStateObject).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, pins the position of the anchored object within the 
			 * text frame top and bottom.
			 * @type {boolean}
			 */
			public pinPosition: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, the position of the anchored object is relative to 
			 * the binding spine of the page or spread.
			 * @type {boolean}
			 */
			public spineRelative: boolean;
			/**
			 * The vertical alignment of the anchored object reference 
			 * point with the vertical reference point on the page. Notes: 
			 * Valid only when anchored position is custom.
			 * @type {Adobe.Incopy.VerticalAlignment}
			 */
			public verticalAlignment: Adobe.Incopy.VerticalAlignment;
			/**
			 * The vertical reference point on the page. Valid when 
			 * anchored position is custom.
			 * @type {Adobe.Incopy.VerticallyRelativeTo}
			 */
			public verticalReferencePoint: Adobe.Incopy.VerticallyRelativeTo;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerAnchoredObjectSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Inserts the anchored object into specified story.
			 * @param {InsertionPoint} storyOffsetParam The location within 
			 * the story, specified as an insertion point.
			 * @param {AnchorPosition} anchoredPositionParam The position 
			 * of the anchored object relative to the anchor. (Optional)
			 * @returns {void}
			 */
			public insertAnchoredObject(storyOffsetParam: InsertionPoint, anchoredPositionParam: AnchorPosition): void;
			/**
			 * Releases the anchored object from its associated text.
			 * @returns {void}
			 */
			public releaseAnchoredObject(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerAnchoredObjectSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}