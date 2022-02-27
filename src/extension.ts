import * as vscode from 'vscode';

let myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

export function activate(context: vscode.ExtensionContext) {
	
	let configuration = vscode.workspace.getConfiguration('pray4ukraine');
	let message = configuration.get<string>('message', '');
	if (message === '') {
		message = 'Pray for Ukraine';
	}

	context.subscriptions.push(myStatusBarItem);

	myStatusBarItem.text = '🇺🇦'+message;
	myStatusBarItem.show();

}

export function deactivate() {
	myStatusBarItem.hide();
}
