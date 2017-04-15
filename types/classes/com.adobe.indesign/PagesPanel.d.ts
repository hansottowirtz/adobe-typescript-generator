/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PagesPanel extends Adobe.Indesign.Panel {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** Page icon size. */
			public iconSize: Adobe.Indesign.IconSizes;
			/** The index of the PagesPanel within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** Master page icon size. */
			public masterIconSize: Adobe.Indesign.IconSizes;
			/**
			 * If true, display thumbnails of the pages in the master pages 
			 * area of the panel.
			 */
			public mastersThumbnails: boolean;
			/**
			 * If true, master page icons will be arranged vertically 
			 * around the binding spine. If false, master page icons will 
			 * be arranged horizontally.
			 */
			public masterVerticalView: boolean;
			/** The name of the PagesPanel. */
			public readonly name: string;
			/**
			 * If true, the pages area of the panel will be drawn above the 
			 * master pages area.
			 */
			public pagesOnTop: boolean;
			/**
			 * If true, display thumbnails of the pages in the pages area 
			 * of the panel.
			 */
			public pagesThumbnails: boolean;
			/** The parent of the PagesPanel (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Specifies the behavior of the document and master page areas 
			 * of the panel when the panel is resized.
			 */
			public resizeBehavior: Adobe.Indesign.PanelLayoutResize;
			/**
			 * If true, a rotation icon will display next to spreads with 
			 * non-zero rotation applied.
			 */
			public rotationIcons: boolean;
			/**
			 * If true, a page transitions icon will display next to 
			 * spreads with page transitions applied.
			 */
			public transitionsIcons: boolean;
			/**
			 * If true, a transparency icon will display next to spreads 
			 * with elements having transparency applied.
			 */
			public transparencyIcons: boolean;
			/**
			 * If true, document page icons will be arranged vertically 
			 * around the binding spine. If false, page icons will be 
			 * arranged horizontally.
			 */
			public verticalView: boolean;
			/** If true, the panel is visible. */
			public visible: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPagesPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPagesPanel(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}