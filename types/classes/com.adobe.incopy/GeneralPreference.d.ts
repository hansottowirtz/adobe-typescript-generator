/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GeneralPreference extends Adobe.Incopy.Preference {
			/** If true, application bar is shown. */
			public applicationBarShown: boolean;
			/** If true, panel drawers close automatically. */
			public autoCollapseIconPanels: boolean;
			/**
			 * If true, vertical reveal strips appear when palette UI is 
			 * hidden.
			 */
			public autoShowHiddenPanels: boolean;
			/** If true, floating windows can be docked by user as tabs. */
			public enableFloatingWindowDocking: boolean;
			/** Controls whether or not multi-touch gestures are enabled. */
			public enableMultiTouchGestures: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, include a preview image when saving the document */
			public includePreview: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** If true, documents open as tabs. */
			public openDocumentsAsTabs: boolean;
			/**
			 * Number of items to show in the Open Recent menu list. Range: 
			 * 0 to 30
			 */
			public openRecentLength: number;
			/** The parent of the GeneralPreference (a Application). */
			public readonly parent: any;
			/**
			 * Controls whether or not to show thumbnails of imported files 
			 * in the Place icon.
			 */
			public placeCursorUsesThumbnails: boolean;
			/** The size of the preview image. */
			public previewSize: Adobe.Incopy.PreviewSizeOptions;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The location in which to store temporary files. */
			public temporaryFolder: File;
			/** Controls the appearance of the Tools panel. */
			public toolsPanel: Adobe.Incopy.ToolsPanelOptions;
			/** Tool tip behavior. */
			public toolTips: Adobe.Incopy.ToolTipOptions;
			/** If true, application lives in a frame. */
			public useApplicationFrame: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}