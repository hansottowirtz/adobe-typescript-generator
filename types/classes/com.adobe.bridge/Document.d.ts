/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Document extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public additionalMetadata: any[];
			/** This is not a Property Description. */
			public allowDrags: boolean;
			/** This is not a Property Description. */
			public bottomNavbar: Adobe.Bridge.Navbar;
			/** This is not a Property Description. */
			public browserMode: string;
			/** This is not a Property Description. */
			public contentPaneMode: string;
			/** This is not a Property Description. */
			public readonly context: Adobe.Bridge.Thumbnail;
			/** This is not a Property Description. */
			public displayInspectorView: boolean;
			/** This is not a Property Description. */
			public readonly groupedSelections: any[];
			/** This is not a Property Description. */
			public height: number;
			/** This is not a Property Description. */
			public readonly hwnd: number;
			/** This is not a Property Description. */
			public readonly id: number;
			/** This is not a Property Description. */
			public jsFuncs: any;
			/** This is not a Property Description. */
			public readonly maximized: boolean;
			/** This is not a Property Description. */
			public readonly minimized: boolean;
			/** This is not a Property Description. */
			public readonly navbars: any;
			/** This is not a Property Description. */
			public noItems: string;
			/** This is not a Property Description. */
			public owner: string;
			/** This is not a Property Description. */
			public readonly palettes: any[];
			/** This is not a Property Description. */
			public position: any;
			/** This is not a Property Description. */
			public readonly presentationMode: string;
			/** This is not a Property Description. */
			public presentationPath: string;
			/** This is not a Property Description. */
			public readonly previewLooping: boolean;
			/** This is not a Property Description. */
			public readonly selectionLength: number;
			/** This is not a Property Description. */
			public readonly selections: any[];
			/** This is not a Property Description. */
			public readonly selectionsLength: number;
			/** This is not a Property Description. */
			public showThumbnailName: boolean;
			/** This is not a Property Description. */
			public sorts: any[];
			/** This is not a Property Description. */
			public readonly stacks: any[];
			/** This is not a Property Description. */
			public status: string;
			/** This is not a Property Description. */
			public thumbnail: Adobe.Bridge.Thumbnail;
			/** This is not a Property Description. */
			public thumbnailViewMode: string;
			/** This is not a Property Description. */
			public topNavbar: Adobe.Bridge.Navbar;
			/** This is not a Property Description. */
			public visible: boolean;
			/** This is not a Property Description. */
			public readonly visibleThumbnails: any[];
			/** This is not a Property Description. */
			public readonly visibleThumbnailsLength: number;
			/** This is not a Property Description. */
			public visitUrl: Function;
			/** This is not a Property Description. */
			public width: number;
			/** This is not a Property Description. */
			public readonly workspace: any;
			/** This is not a Method Description. */
			public constructor();
			/** This is not a Method Description. */
			public bringToFront(): void;
			/** This is not a Method Description. */
			public center(): void;
			/** This is not a Method Description. */
			public chooseMenuItem(): void;
			/** This is not a Method Description. */
			public close(): void;
			/**
			 * @param {any[]} args - 
			 */
			protected createWithArgs(args: any[]): void;
			/** This is not a Method Description. */
			public deselect(): void;
			/** This is not a Method Description. */
			public deselectAll(): void;
			/** This is not a Method Description. */
			public execJS(): void;
			/** This is not a Method Description. */
			public flushStackProperties(): void;
			/** This is not a Method Description. */
			public getSelection(): string;
			/** This is not a Method Description. */
			public maximize(): void;
			/** This is not a Method Description. */
			public minimize(): void;
			/** This is not a Method Description. */
			public normalize(): void;
			/** This is not a Method Description. */
			public print(): boolean;
			/** This is not a Method Description. */
			public refresh(): void;
			/** This is not a Method Description. */
			public resetToDefaultWorkspace(): void;
			/** This is not a Method Description. */
			public restore(): void;
			/** This is not a Method Description. */
			public reveal(): void;
			/** This is not a Method Description. */
			public select(): void;
			/** This is not a Method Description. */
			public selectAll(): void;
			/**
			 * This is not a Method Description.
			 * @param {string} mode - 
			 * @param {string} path - 
			 */
			public setPresentationMode(mode: string, path: string): void;
			/** This is not a Method Description. */
			public setWorkspace(): boolean;
		}
	}
}