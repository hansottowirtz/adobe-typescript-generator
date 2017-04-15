/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GraphicLayer extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, the layer is an adjustment layer. Note: Must occur 
			 * in the script before overriding the visibility state of the 
			 * layer with a current visibility statement.
			 */
			public readonly adjustmentLayer: boolean;
			/** If true, the layer is visible in the document. */
			public currentVisibility: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** If true, the export state is on. */
			public readonly exportState: boolean;
			/**
			 * If true, layer effects have been applied to the layer. Note: 
			 * Must occur in the script before overriding the visibility 
			 * state of the layer with a current visibility statement.
			 */
			public readonly fxLayer: boolean;
			/** A collection of graphic layers. */
			public readonly graphicLayers: Adobe.Indesign.GraphicLayers;
			/** If true, the layer has an export state. */
			public readonly hasExportState: boolean;
			/** If true, the layer has a print state. */
			public readonly hasPrintState: boolean;
			/** If true, the layer has a view state. */
			public readonly hasViewState: boolean;
			/** The unique ID of the GraphicLayer. */
			public readonly id: number;
			/** The index of the GraphicLayer within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** If true, the GraphicLayer is locked. */
			public readonly locked: boolean;
			/** The name of the GraphicLayer. */
			public readonly name: string;
			/**
			 * Returns the visibility setting set for the layer before the 
			 * graphic file was imported. Note: Must occur in the script 
			 * before overriding the visibility state with a current 
			 * visibility statement.
			 */
			public readonly originalVisibility: boolean;
			/**
			 * The parent of the GraphicLayer (a GraphicLayerOption or 
			 * GraphicLayer).
			 */
			public readonly parent: any;
			/** If true, the print state is on. */
			public readonly printState: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, the layer is a section divider layer. */
			public readonly sectionDividerLayer: boolean;
			/** If true, the layer is a separator layer. */
			public readonly separatorLayer: boolean;
			/** If true, the view state is on. */
			public readonly viewState: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGraphicLayer(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerGraphicLayer(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}