import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import IletisimFormu from "./IletisimFormu";

test("hata olmadan render ediliyor", () => {
  render(<IletisimFormu />);
});

test("iletişim formu headerı render ediliyor", () => {
  render(<IletisimFormu />);
  const header = screen.getByText("İletişim Formu");
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
});

test("kullanıcı adını 5 karakterden az girdiğinde BİR hata mesajı render ediyor.", async () => {
  render(<IletisimFormu />);
  const input = screen.getByLabelText("Ad*");
  userEvent.type(input, "abcd");
  const error = screen.getByTestId("error");
  expect(await error).toBeVisible();
});

test("kullanıcı inputları doldurmadığında ÜÇ hata mesajı render ediliyor.", async () => {
  render(<IletisimFormu />);
  const submitButton = screen.getByRole("button", "submit");
  userEvent.click(submitButton);
  const errors = screen.getAllByTestId("error");
  expect(await errors).toHaveLength(3);
});

test("kullanıcı doğru ad ve soyad girdiğinde ama email girmediğinde BİR hata mesajı render ediliyor.", async () => {
  render(<IletisimFormu />);
  const nameInput = screen.getByLabelText("Ad*");
  const surnameInput = screen.getByPlaceholderText(/mansız/i);
  userEvent.type(nameInput, "abcde");
  userEvent.type(surnameInput, "a");
  const submitButton = screen.getByRole("button", "submit");
  userEvent.click(submitButton);
  const errors = screen.getAllByTestId("error");
  expect(await errors).toHaveLength(1);
});

test('geçersiz bir mail girildiğinde "email geçerli bir email adresi olmalıdır." hata mesajı render ediliyor', async () => {
  render(<IletisimFormu />);
  const emailInput = screen.getByPlaceholderText(
    /yüzyılıngolcüsü@hotmail.com/i
  );
  userEvent.type(emailInput, "yüzyılıngolcüsühotmail.com");
  const errors = screen.getByTestId("error");
  expect(await errors).toHaveTextContent(
    "email geçerli bir email adresi olmalıdır."
  );
});

test('soyad girilmeden gönderilirse "soyad gereklidir." mesajı render ediliyor', async () => {
  render(<IletisimFormu />);
  const email = screen.getByPlaceholderText(/yüzyılıngolcüsü@hotmail.com/i);
  userEvent.type(email, "yüzyılıngolcüsü@hotmail.com");
  const nameInput = screen.getByLabelText("Ad*");
  userEvent.type(nameInput, "abcde");
  const submitButton = screen.getByRole("button", "submit");
  userEvent.click(submitButton);
  const errors = screen.getByTestId("error");
  expect(await errors).toHaveTextContent("soyad gereklidir.");
});

test("ad,soyad, email render ediliyor. mesaj bölümü doldurulmadığında hata mesajı render edilmiyor.", async () => {
  render(<IletisimFormu />);

  const email = screen.getByPlaceholderText(/yüzyılıngolcüsü@hotmail.com/i);
  userEvent.type(email, "yüzyılıngolcüsü@hotmail.com");

  const nameInput = screen.getByLabelText("Ad*");
  userEvent.type(nameInput, "abcde");
  const surnameInput = screen.getByPlaceholderText(/mansız/i);
  userEvent.type(surnameInput, "soyisim");

  const submitButton = screen.getByRole("button", "submit");
  userEvent.click(submitButton);

  await waitFor(
    () => {
      const errorArea = screen.queryAllByTestId("error");
      expect(errorArea.length).toBe(0);
    },
    { timeout: 4000 }
  );
});

test("form gönderildiğinde girilen tüm değerler render ediliyor.", async () => {
  render(<IletisimFormu />);
  userEvent.type(screen.getByPlaceholderText("İlhan"), "Aylin");
  userEvent.type(screen.getByPlaceholderText("Mansız"), "Developer");
  userEvent.type(
    screen.getByPlaceholderText("yüzyılıngolcüsü@hotmail.com"),
    "aylin@developer.com"
  );
  userEvent.type(screen.getByText("Mesaj"), "ödev tamamlandı");
  userEvent.click(screen.getByRole("button"));

  expect(await screen.findByTestId("firstnameDisplay")).toHaveTextContent(
    "Aylin"
  );
  expect(await screen.findByTestId("lastnameDisplay")).toHaveTextContent(
    "Developer"
  );
  expect(await screen.findByTestId("emailDisplay")).toHaveTextContent(
    "aylin@developer.com"
  );
  expect(await screen.findByTestId("messageDisplay")).toHaveTextContent(
    "ödev tamamlandı"
  );
});