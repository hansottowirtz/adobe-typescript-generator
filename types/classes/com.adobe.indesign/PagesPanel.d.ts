/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Panel */
		class PagesPanel extends Adobe.Indesign.Panel {
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
			 * Page icon size.
			 * @type {Adobe.Indesign.IconSizes}
			 */
			public iconSize: Adobe.Indesign.IconSizes;
			/**
			 * The index of the PagesPanel within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Master page icon size.
			 * @type {Adobe.Indesign.IconSizes}
			 */
			public masterIconSize: Adobe.Indesign.IconSizes;
			/**
			 * If true, display thumbnails of the pages in the master pages 
			 * area of the panel.
			 * @type {boolean}
			 */
			public mastersThumbnails: boolean;
			/**
			 * If true, master page icons will be arranged vertically 
			 * around the binding spine. If false, master page icons will 
			 * be arranged horizontally.
			 * @type {boolean}
			 */
			public masterVerticalView: boolean;
			/**
			 * The name of the PagesPanel.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * If true, the pages area of the panel will be drawn above the 
			 * master pages area.
			 * @type {boolean}
			 */
			public pagesOnTop: boolean;
			/**
			 * If true, display thumbnails of the pages in the pages area 
			 * of the panel.
			 * @type {boolean}
			 */
			public pagesThumbnails: boolean;
			/**
			 * The parent of the PagesPanel (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Specifies the behavior of the document and master page areas 
			 * of the panel when the panel is resized.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 */
			public resizeBehavior: Adobe.Indesign.PanelLayoutResize;
			/**
			 * If true, a rotation icon will display next to spreads with 
			 * non-zero rotation applied.
			 * @type {boolean}
			 */
			public rotationIcons: boolean;
			/**
			 * If true, a page transitions icon will display next to 
			 * spreads with page transitions applied.
			 * @type {boolean}
			 */
			public transitionsIcons: boolean;
			/**
			 * If true, a transparency icon will display next to spreads 
			 * with elements having transparency applied.
			 * @type {boolean}
			 */
			public transparencyIcons: boolean;
			/**
			 * If true, the panel is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPagesPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPagesPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}