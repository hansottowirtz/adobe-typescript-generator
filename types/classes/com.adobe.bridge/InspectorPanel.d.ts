/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Your script defines what kind of related information to 
		 * display, and how to display it. The panel serves as a frame 
		 * and parent for subpanels that actually display the 
		 * information. Subpanels are represented by members of the 
		 * Panelette Base Class contained in this parent panel.Register 
		 * a inspection panel that you create to make it available to 
		 * Adobe Bridge, using app.registerInspectorPanel().To turn the 
		 * display of registered inspection panels on or off in a 
		 * particular browser window, set 
		 * Document.displayInspectorView.
		 */
		class InspectorPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * Whether to display this panel.
			 * @type {boolean}
			 */
			public displayInInspector: boolean;
			/**
			 * The localized title string to display in the panel's tab 
			 * header.
			 * @type {string}
			 * @readonly
			 */
			public readonly displayTitle: string;
			/**
			 * The unique menu identifier of a script-defined flyout menu 
			 * for this panel.
			 * @type {string}
			 * @readonly
			 */
			public readonly flyoutMenuId: string;
			/**
			 * When true, the panel is minimized or iconified.
			 * @type {boolean}
			 */
			public minimized: boolean;
			/**
			 * A collection of panelettes contained in this panel, in 
			 * display order.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly panelettes: any[];
			/**
			 * The preferred default position of this tabbed panel in the 
			 * Inspector, relative to other panels.
			 * @type {number}
			 */
			public sortPosition: number;
			/**
			 * The title text of this panel, displayed in the tab header.
			 * @type {string}
			 */
			public title: string;
			/**
			 * When true, the majority of this panel is visible on the 
			 * screen.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly visible: boolean;
			/**
			 * When true, this panel occupies the entire available 
			 * horizontal space.
			 * @type {boolean}
			 */
			public wide: boolean;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Registers a script-defined panelette as a member of this 
			 * panel, adding it to panelettes list.
			 * @param {any} panelette 
			 * @returns {boolean}
			 */
			public registerPanelette(panelette: any): boolean;
			/**
			 * Removes a member panelette from this panel.
			 * @param {any} panelette 
			 * @returns {boolean}
			 */
			public unregisterPanelette(panelette: any): boolean;
		}
	}
}