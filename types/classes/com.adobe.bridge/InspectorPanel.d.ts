/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			/** Whether to display this panel. */
			public displayInInspector: boolean;
			/**
			 * The localized title string to display in the panel's tab 
			 * header.
			 */
			public readonly displayTitle: string;
			/**
			 * The unique menu identifier of a script-defined flyout menu 
			 * for this panel.
			 */
			public readonly flyoutMenuId: string;
			/** When true, the panel is minimized or iconified. */
			public minimized: boolean;
			/**
			 * A collection of panelettes contained in this panel, in 
			 * display order.
			 */
			public readonly panelettes: any[];
			/**
			 * The preferred default position of this tabbed panel in the 
			 * Inspector, relative to other panels.
			 */
			public sortPosition: number;
			/** The title text of this panel, displayed in the tab header. */
			public title: string;
			/**
			 * When true, the majority of this panel is visible on the 
			 * screen.
			 */
			public readonly visible: boolean;
			/**
			 * When true, this panel occupies the entire available 
			 * horizontal space.
			 */
			public wide: boolean;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Registers a script-defined panelette as a member of this 
			 * panel, adding it to panelettes list.
			 * @param {any} panelette 
			 */
			public registerPanelette(panelette: any): boolean;
			/**
			 * Removes a member panelette from this panel.
			 * @param {any} panelette 
			 */
			public unregisterPanelette(panelette: any): boolean;
		}
	}
}