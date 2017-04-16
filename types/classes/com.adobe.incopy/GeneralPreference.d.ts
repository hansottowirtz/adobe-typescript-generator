/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GeneralPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, application bar is shown.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly applicationBarShown: boolean;
			/**
			 * If true, panel drawers close automatically.
			 * @type {boolean}
			 */
			public autoCollapseIconPanels: boolean;
			/**
			 * If true, vertical reveal strips appear when palette UI is 
			 * hidden.
			 * @type {boolean}
			 */
			public autoShowHiddenPanels: boolean;
			/**
			 * If true, floating windows can be docked by user as tabs.
			 * @type {boolean}
			 */
			public enableFloatingWindowDocking: boolean;
			/**
			 * Controls whether or not multi-touch gestures are enabled.
			 * @type {boolean}
			 */
			public enableMultiTouchGestures: boolean;
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
			 * Controls whether or not to highlight object under selection 
			 * tool.
			 * @type {boolean}
			 */
			public highlightObjectUnderSelectionTool: boolean;
			/**
			 * If true, include a preview image when saving the document
			 * @type {boolean}
			 */
			public includePreview: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, documents open as tabs.
			 * @type {boolean}
			 */
			public openDocumentsAsTabs: boolean;
			/**
			 * Number of items to show in the Open Recent menu list. Range: 
			 * 0 to 30
			 * @type {number}
			 */
			public openRecentLength: number;
			/**
			 * The parent of the GeneralPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * Controls whether or not to show thumbnails of imported files 
			 * in the Place icon.
			 * @type {boolean}
			 */
			public placeCursorUsesThumbnails: boolean;
			/**
			 * The pages to create preview images for. Note: Valid when 
			 * include preview is true.
			 * @type {Adobe.Incopy.PreviewPagesOptions}
			 */
			public previewPages: Adobe.Incopy.PreviewPagesOptions;
			/**
			 * The size of the preview image.
			 * @type {Adobe.Incopy.PreviewSizeOptions}
			 */
			public previewSize: Adobe.Incopy.PreviewSizeOptions;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The location in which to store temporary files.
			 * @type {File}
			 */
			public temporaryFolder: File;
			/**
			 * Controls the appearance of the Tools panel.
			 * @type {Adobe.Incopy.ToolsPanelOptions}
			 */
			public toolsPanel: Adobe.Incopy.ToolsPanelOptions;
			/**
			 * Tool tip behavior.
			 * @type {Adobe.Incopy.ToolTipOptions}
			 */
			public toolTips: Adobe.Incopy.ToolTipOptions;
			/**
			 * If true, application lives in a frame.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly useApplicationFrame: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}