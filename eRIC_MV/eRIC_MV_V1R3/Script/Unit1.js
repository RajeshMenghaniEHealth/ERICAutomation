﻿function Test1()
{
  var gridCellContentPresenter;
  var customComboBoxEdit;
  gridCellContentPresenter = Aliases.iMDSoft_Metavision.HwndSource_ImdGenericWindow.ImdGenericWindow.GridRow.GridCellContentPresenter;
  gridCellContentPresenter.Click(297, 11);
  customComboBoxEdit = gridCellContentPresenter.FindComboBoxEdit;
  customComboBoxEdit.Keys("[ScrollLock][ScrollLock][ScrollLock][ScrollLock]");
  customComboBoxEdit.Click(297, 11);
}

function Test2()
{
  let imdGenericWindow = Aliases.iMDSoft_Metavision.HwndSource_ImdGenericWindow.ImdGenericWindow;
  imdGenericWindow.Button.Keys("[ScrollLock][ScrollLock][ScrollLock][ScrollLock]");
  imdGenericWindow.GridRow.GridCellContentPresenter.Click(93, 13);
}

function Test3()
{
  Aliases.iMDSoft_Metavision.HwndSource_root.root.FloatingDockPanel.Grid.Items.ContentControl.Grid.Items.Click(1656, 15);
}