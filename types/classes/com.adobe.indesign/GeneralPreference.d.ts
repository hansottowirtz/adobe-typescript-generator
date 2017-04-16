/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class GeneralPreference extends Adobe.Indesign.Preference {
			/** If true, application bar is shown. */
			public readonly applicationBarShown: boolean;
			/** If true, panel drawers close automatically. */
			public autoCollapseIconPanels: boolean;
			/**
			 * If true, vertical reveal strips appear when palette UI is 
			 * hidden.
			 */
			public autoShowHiddenPanels: boolean;
			/**
			 * The threshold at which to trigger font subsetting based on 
			 * the number of glyphs the font contains.
			 */
			public completeFontDownloadGlyphLimit: number;
			/** Enable the creation of links on content place */
			public createLinksOnContentPlace: boolean;
			/**
			 * When using a custom monitor resolution, what is the value of 
			 * that resolution in pixels per inch
			 */
			public customMonitorPpi: number;
			/** If true, floating windows can be docked by user as tabs. */
			public enableFloatingWindowDocking: boolean;
			/** Controls whether or not multi-touch gestures are enabled. */
			public enableMultiTouchGestures: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Controls whether or not to greek vector graphics when 
			 * dragging at high quality.
			 */
			public greekVectorGraphicsOnDrag: boolean;
			/**
			 * Controls whether or not to highlight object under selection 
			 * tool.
			 */
			public highlightObjectUnderSelectionTool: boolean;
			/** If true, includes a preview in saved documents. */
			public includePreview: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The value of the system reported main monitor resolution */
			public readonly mainMonitorPpi: number;
			/** Enable the mapping of styles on content place */
			public mapStylesOnContentPlace: boolean;
			/**
			 * Controls whether page items move when a page is repositioned 
			 * from the UI. The option/alt key temporarily reverses this 
			 * property
			 */
			public objectsMoveWithPage: boolean;
			/** If true, documents open as tabs. */
			public openDocumentsAsTabs: boolean;
			/**
			 * Number of items to show in the Open Recent menu list. Range: 
			 * 0 to 30
			 */
			public openRecentLength: number;
			/** The page numbering method. */
			public pageNumbering: Adobe.Indesign.PageNumberingOptions;
			/** The parent of the GeneralPreference (a Application). */
			public readonly parent: any;
			/**
			 * Controls whether or not to show thumbnails of imported files 
			 * in the Place icon.
			 */
			public placeCursorUsesThumbnails: boolean;
			/**
			 * Controls whether or not you can select and interact with a 
			 * locked item. When this is off, only position is locked.
			 */
			public preventSelectingLockedItems: boolean;
			/**
			 * The pages to create preview images for. Note: Valid when 
			 * include preview is true.
			 */
			public previewPages: Adobe.Indesign.PreviewPagesOptions;
			/** The preview size. Note: Valid when include preview is true. */
			public previewSize: Adobe.Indesign.PreviewSizeOptions;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Controls whether or not the anchor object adornment is 
			 * shown.
			 */
			public showAnchorObjectAdornment: boolean;
			/**
			 * Controls whether or not the content grabber adornment is 
			 * shown.
			 */
			public showContentGrabber: boolean;
			/**
			 * Show the conveyor on content collector or content placer 
			 * tool activation
			 */
			public showConveyor: boolean;
			/**
			 * Controls whether or not the live corners grabber adornment 
			 * is shown.
			 */
			public showLiveCorners: boolean;
			/**
			 * Controls whether or not to show the master page overlay when 
			 * a page is selected using the Page Tool.
			 */
			public showMasterPageOverlay: boolean;
			/**
			 * Controls whether or not to dynamically display 
			 * transformation information as part of the cursor while 
			 * manipulating page items.
			 */
			public showTransformationValues: boolean;
			/** The location in which to store temporary files. */
			public temporaryFolder: File;
			/** Controls the appearance of the Tools panel. */
			public toolsPanel: Adobe.Indesign.ToolsPanelOptions;
			/** Tool tip behavior. */
			public toolTips: Adobe.Indesign.ToolTipOptions;
			/** If true, application lives in a frame. */
			public readonly useApplicationFrame: boolean;
			/**
			 * Enable the use of a custom monitor resolution in pixels per 
			 * inch as opposed to querying the system settings
			 */
			public useCustomMonitorResolution: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerGeneralPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}